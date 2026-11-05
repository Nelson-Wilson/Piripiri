"use client";

import { useEffect, useRef, useState } from "react";
import type * as THREE from "three";
import type { TableDef, TableZone } from "@/data/reservas";
import { scale, tableDims, zoneConfig } from "@/data/reservas";

export type MapStatus = "available" | "reserved" | "unavailable";

type CamMode = "persp" | "top";

type Props = {
  tables: TableDef[];
  statuses: Record<number, MapStatus>;
  selected: number | null;
  onSelect: (id: number) => void;
  onZoneChange?: (zone: TableZone) => void;
};

const COLORS: Record<MapStatus, string> = {
  available: "#ffc61a",
  reserved: "#d4141c",
  unavailable: "#6b6b72",
};

const TEXT_COLORS: Record<MapStatus, string> = {
  available: "#1a1205",
  reserved: "#ffffff",
  unavailable: "#e8e8ea",
};

type Rec = {
  id: number;
  padMat: THREE.MeshBasicMaterial;
  sel: THREE.Mesh;
  badgeCanvas: HTMLCanvasElement;
  badgeTex: THREE.CanvasTexture;
};

export default function TableMap3D({ tables, statuses, selected, onSelect, onZoneChange }: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [zone, setZone] = useState<TableZone>("interior");
  const [cam, setCam] = useState<CamMode>("persp");
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  const zoneRef = useRef<TableZone>(zone);
  const camRef = useRef<CamMode>(cam);
  const statusesRef = useRef(statuses);
  const selectedRef = useRef(selected);
  const onSelectRef = useRef(onSelect);
  const onZoneChangeRef = useRef(onZoneChange);
  const paintRef = useRef<() => void>(() => {});
  const flyRef = useRef<(zone: TableZone, cam: CamMode) => void>(() => {});

  useEffect(() => {
    onSelectRef.current = onSelect;
  }, [onSelect]);

  useEffect(() => {
    onZoneChangeRef.current = onZoneChange;
  }, [onZoneChange]);

  useEffect(() => {
    onZoneChangeRef.current?.(zone);
  }, [zone]);

  useEffect(() => {
    statusesRef.current = statuses;
    paintRef.current();
  }, [statuses]);

  useEffect(() => {
    selectedRef.current = selected;
    if (selected !== null) {
      const t = tables.find((x) => x.id === selected);
      if (t && t.zone !== zoneRef.current) {
        zoneRef.current = t.zone;
        setZone(t.zone);
        return;
      }
    }
    paintRef.current();
  }, [selected, tables]);

  useEffect(() => {
    zoneRef.current = zone;
    camRef.current = cam;
    flyRef.current(zone, cam);
    paintRef.current();
  }, [zone, cam]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let disposed = false;
    let started = false;
    let cleanup: (() => void) | null = null;
    let io: IntersectionObserver | null = null;

    const init = async () => {
      try {
        const { THREE, OrbitControls } = await import("@/lib/three-scene");
        if (disposed) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        let dirty = true;
        let hoverId: number | null = null;
        let tween:
          | {
              t0: number;
              dur: number;
              p0: THREE.Vector3;
              g0: THREE.Vector3;
              p1: THREE.Vector3;
              g1: THREE.Vector3;
            }
          | null = null;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.setClearColor(0x000000, 0);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1.6, 0.1, 120);

        const controls = new OrbitControls(camera, canvas);
        controls.enableDamping = false;
        controls.maxPolarAngle = Math.PI * 0.47;
        controls.minDistance = 3;
        controls.maxDistance = 40;
        controls.addEventListener("change", () => {
          dirty = true;
        });

        scene.add(new THREE.HemisphereLight(0xffffff, 0x4a4a52, 1.05));
        const sun = new THREE.DirectionalLight(0xffffff, 0.7);
        sun.position.set(6, 16, 12);
        sun.target.position.set(0, 0, 6);
        sun.castShadow = true;
        sun.shadow.mapSize.set(2048, 2048);
        const sc = sun.shadow.camera;
        sc.left = -15;
        sc.right = 15;
        sc.top = 15;
        sc.bottom = -15;
        sc.near = 1;
        sc.far = 50;
        sun.shadow.bias = -0.0006;
        scene.add(sun, sun.target);

        /* ---------- texturas ---------- */
        const canvasTex = (
          size: number,
          draw: (g: CanvasRenderingContext2D, s: number) => void
        ) => {
          const c = document.createElement("canvas");
          c.width = c.height = size;
          const g = c.getContext("2d");
          if (!g) throw new Error("2d");
          draw(g, size);
          const t = new THREE.CanvasTexture(c);
          t.wrapS = t.wrapT = THREE.RepeatWrapping;
          t.colorSpace = THREE.SRGBColorSpace;
          t.anisotropy = renderer.capabilities.getMaxAnisotropy();
          return t;
        };

        const floorTex = (z: (typeof zoneConfig)[TableZone], W: number, D: number) => {
          const t = canvasTex(256, (g, s) => {
            g.fillStyle = z.light;
            g.fillRect(0, 0, s, s);
            g.fillStyle = z.dark;
            g.beginPath();
            g.moveTo(s / 2, 0);
            g.lineTo(s, s / 2);
            g.lineTo(s / 2, s);
            g.lineTo(0, s / 2);
            g.closePath();
            g.fill();
          });
          t.repeat.set(W / z.tile, D / z.tile);
          return t;
        };

        const ginghamTex = (w: number, d: number) => {
          const t = canvasTex(64, (g, s) => {
            g.fillStyle = "#ffffff";
            g.fillRect(0, 0, s, s);
            g.fillStyle = "rgba(229,35,73,0.62)";
            g.fillRect(0, 0, s / 2, s);
            g.fillRect(0, 0, s, s / 2);
          });
          t.repeat.set(w / 0.25, d / 0.25);
          return t;
        };

        /* ---------- mobiliário ---------- */
        const addChair = (
          parent: THREE.Group,
          x: number,
          z: number,
          rotY: number,
          mat: THREE.Material
        ) => {
          const g = new THREE.Group();
          const seat = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.38), mat);
          seat.position.y = 0.46;
          const back = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.36, 0.05), mat);
          back.position.set(0, 0.66, -0.165);
          const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.44, 0.06), mat);
          leg.position.y = 0.22;
          [seat, back, leg].forEach((m) => {
            m.castShadow = true;
            g.add(m);
          });
          g.position.set(x, 0, z);
          g.rotation.y = rotY;
          parent.add(g);
        };

        const recs = new Map<number, Rec>();
        const pickables: THREE.Object3D[] = [];
        const byId = new Map(tables.map((t) => [t.id, t]));

        const drawBadge = (rec: Rec, status: MapStatus) => {
          const c = rec.badgeCanvas;
          const g = c.getContext("2d");
          if (!g) return;
          const s = c.width;
          g.clearRect(0, 0, s, s);
          g.beginPath();
          g.arc(s / 2, s / 2, s / 2 - 6, 0, Math.PI * 2);
          g.fillStyle = COLORS[status];
          g.fill();
          g.lineWidth = 6;
          g.strokeStyle = selectedRef.current === rec.id ? "#ffd84d" : "rgba(0,0,0,0.45)";
          g.stroke();
          g.fillStyle = TEXT_COLORS[status];
          g.font = `700 ${String(rec.id).length > 2 ? 50 : 62}px Arial, sans-serif`;
          g.textAlign = "center";
          g.textBaseline = "middle";
          g.fillText(String(rec.id), s / 2, s / 2 + 3);
          rec.badgeTex.needsUpdate = true;
        };

        const buildTable = (d: TableDef) => {
          const z = zoneConfig[d.zone];
          const [w, dp] = tableDims[d.shape];
          const group = new THREE.Group();
          group.position.set(
            (d.x + w * 50 - z.w / 2) * scale,
            0,
            z.cz + (d.y + dp * 50 - z.h / 2) * scale
          );
          scene.add(group);

          const padMat = new THREE.MeshBasicMaterial({
            color: COLORS.available,
            transparent: true,
            opacity: 0.55,
            depthWrite: false,
          });
          const pad = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.5, dp + 0.5), padMat);
          pad.rotation.x = -Math.PI / 2;
          pad.position.y = 0.02;
          group.add(pad);

          const selMat = new THREE.MeshBasicMaterial({
            color: 0xffd84d,
            transparent: true,
            opacity: 0.95,
            depthWrite: false,
          });
          const sel = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.9, dp + 0.9), selMat);
          sel.rotation.x = -Math.PI / 2;
          sel.position.y = 0.012;
          sel.visible = false;
          group.add(sel);

          const gm = new THREE.MeshLambertMaterial({ map: ginghamTex(w, dp) });
          const cloth = new THREE.MeshLambertMaterial({ color: 0xf1e6e8 });
          const top = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, dp), [
            cloth,
            cloth,
            gm,
            cloth,
            cloth,
            cloth,
          ]);
          top.position.y = 0.8;
          top.castShadow = true;
          top.receiveShadow = true;

          const skirt = new THREE.Mesh(
            new THREE.BoxGeometry(w * 0.97, 0.34, dp * 0.97),
            new THREE.MeshLambertMaterial({ color: 0xc0392b })
          );
          skirt.position.y = 0.6;
          skirt.castShadow = true;

          const ped = new THREE.Mesh(
            new THREE.CylinderGeometry(0.06, 0.06, 0.45, 12),
            new THREE.MeshLambertMaterial({ color: 0x3a3a3a })
          );
          ped.position.y = 0.23;

          top.userData.tid = d.id;
          skirt.userData.tid = d.id;
          group.add(top, skirt, ped);
          pickables.push(top, skirt);

          const chairMat = new THREE.MeshLambertMaterial({ color: 0xf6f4f0 });
          const cx = d.shape === "lg" ? 0.44 : 0;
          const off = 0.3;
          const hz = dp / 2 + off;
          const hx = w / 2 + off;
          if (d.shape === "lg") {
            [-cx, cx].forEach((x) => {
              addChair(group, x, -hz, 0, chairMat);
              addChair(group, x, hz, Math.PI, chairMat);
            });
          } else {
            addChair(group, 0, -hz, 0, chairMat);
            addChair(group, 0, hz, Math.PI, chairMat);
          }
          if (d.sides) {
            addChair(group, -hx, 0, Math.PI / 2, chairMat);
            addChair(group, hx, 0, -Math.PI / 2, chairMat);
          }

          const badgeCanvas = document.createElement("canvas");
          badgeCanvas.width = badgeCanvas.height = 128;
          const badgeTex = new THREE.CanvasTexture(badgeCanvas);
          badgeTex.colorSpace = THREE.SRGBColorSpace;
          const sprite = new THREE.Sprite(
            new THREE.SpriteMaterial({ map: badgeTex, transparent: true })
          );
          sprite.scale.set(0.62, 0.62, 1);
          sprite.position.set(-w / 2 + 0.04, 1.2, -dp / 2 + 0.04);
          group.add(sprite);

          const rec: Rec = { id: d.id, padMat, sel, badgeCanvas, badgeTex };
          recs.set(d.id, rec);
          drawBadge(rec, statusesRef.current[d.id] ?? "unavailable");
        };

        /* ---------- pisos ---------- */
        (["interior", "explanada"] as const).forEach((k) => {
          const z = zoneConfig[k];
          const W = z.w * scale;
          const D = z.h * scale;
          const side = new THREE.MeshLambertMaterial({ color: 0x2a2f36 });
          const topM = new THREE.MeshLambertMaterial({ map: floorTex(z, W, D) });
          const slab = new THREE.Mesh(new THREE.BoxGeometry(W, 0.3, D), [
            side,
            side,
            topM,
            side,
            side,
            side,
          ]);
          slab.position.set(0, -0.15, z.cz);
          slab.receiveShadow = true;
          scene.add(slab);
        });

        tables.forEach(buildTable);

        /* ---------- estado visual ---------- */
        const paint = () => {
          for (const t of tables) {
            const rec = recs.get(t.id);
            if (!rec) continue;
            const st = statusesRef.current[t.id] ?? "unavailable";
            rec.padMat.color.set(COLORS[st]);
            rec.padMat.opacity = hoverId === t.id ? 0.9 : 0.55;
            rec.sel.visible = selectedRef.current === t.id;
            drawBadge(rec, st);
          }
          dirty = true;
        };
        paintRef.current = paint;

        /* ---------- câmara ---------- */
        const preset = (zk: TableZone, mode: CamMode) => {
          const z = zoneConfig[zk];
          const target = new THREE.Vector3(0, 0, z.cz);
          const asp = Math.max(0.4, stage.clientWidth / Math.max(1, stage.clientHeight));
          const f = Math.max(1, 1.6 / asp);
          const off =
            mode === "top"
              ? new THREE.Vector3(0, z.top * f, 0.01)
              : new THREE.Vector3(0, z.persp[0] * f, z.persp[1] * f);
          return { pos: target.clone().add(off), target };
        };

        const reduce =
          window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

        const flyTo = (zk: TableZone, mode: CamMode) => {
          const p = preset(zk, mode);
          if (reduce) {
            camera.position.copy(p.pos);
            controls.target.copy(p.target);
            controls.update();
            dirty = true;
            return;
          }
          tween = {
            t0: performance.now(),
            dur: 900,
            p0: camera.position.clone(),
            g0: controls.target.clone(),
            p1: p.pos,
            g1: p.target,
          };
        };
        flyRef.current = flyTo;

        const stepTween = () => {
          if (!tween) return;
          const k = Math.min(1, (performance.now() - tween.t0) / tween.dur);
          const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
          camera.position.lerpVectors(tween.p0, tween.p1, e);
          controls.target.lerpVectors(tween.g0, tween.g1, e);
          controls.update();
          dirty = true;
          if (k >= 1) tween = null;
        };

        /* ---------- picking ---------- */
        const raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();

        const hit = (clientX: number, clientY: number) => {
          const r = canvas.getBoundingClientRect();
          pointer.set(
            ((clientX - r.left) / r.width) * 2 - 1,
            -((clientY - r.top) / r.height) * 2 + 1
          );
          raycaster.setFromCamera(pointer, camera);
          const h = raycaster.intersectObjects(pickables, false)[0];
          return h ? (h.object.userData.tid as number) : null;
        };

        let down: { x: number; y: number; t: number } | null = null;

        const onDown = (e: PointerEvent) => {
          down = { x: e.clientX, y: e.clientY, t: performance.now() };
        };

        const onUp = (e: PointerEvent) => {
          if (!down) return;
          const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
          const dt = performance.now() - down.t;
          down = null;
          if (moved >= 6 || dt >= 600) return;
          const id = hit(e.clientX, e.clientY);
          if (id === null) return;
          const t = byId.get(id);
          if (t && t.zone !== zoneRef.current) {
            zoneRef.current = t.zone;
            setZone(t.zone);
          }
          if ((statusesRef.current[id] ?? "unavailable") === "available") {
            onSelectRef.current(id);
          }
        };

        const onMove = (e: PointerEvent) => {
          if (e.buttons) return;
          const id = hit(e.clientX, e.clientY);
          const st = id === null ? null : statusesRef.current[id] ?? "unavailable";
          canvas.style.cursor = id !== null && st === "available" ? "pointer" : "";
          if (id !== hoverId) {
            hoverId = id;
            paint();
          }
        };

        const onLeave = () => {
          if (hoverId !== null) {
            hoverId = null;
            paint();
          }
        };

        canvas.addEventListener("pointerdown", onDown);
        canvas.addEventListener("pointerup", onUp);
        canvas.addEventListener("pointermove", onMove);
        canvas.addEventListener("pointerleave", onLeave);

        /* ---------- redimensionamento ---------- */
        const resize = () => {
          const w = stage.clientWidth;
          const h = stage.clientHeight;
          if (!w || !h) return;
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          dirty = true;
        };

        const ro = new ResizeObserver(resize);
        ro.observe(stage);
        resize();

        const p = preset(zoneRef.current, camRef.current);
        camera.position.copy(p.pos);
        controls.target.copy(p.target);
        controls.update();

        /* ---------- loop ---------- */
        let raf = 0;
        const frame = () => {
          raf = requestAnimationFrame(frame);
          stepTween();
          if (dirty) {
            renderer.render(scene, camera);
            dirty = false;
          }
        };
        raf = requestAnimationFrame(frame);

        paint();
        setReady(true);

        const disposeMaterial = (m: THREE.Material) => {
          const withMap = m as THREE.Material & { map?: THREE.Texture | null };
          withMap.map?.dispose();
          m.dispose();
        };

        cleanup = () => {
          cancelAnimationFrame(raf);
          ro.disconnect();
          canvas.removeEventListener("pointerdown", onDown);
          canvas.removeEventListener("pointerup", onUp);
          canvas.removeEventListener("pointermove", onMove);
          canvas.removeEventListener("pointerleave", onLeave);
          controls.dispose();
          scene.traverse((obj) => {
            const mesh = obj as THREE.Mesh;
            if (mesh.geometry) mesh.geometry.dispose();
            const mat = mesh.material;
            if (Array.isArray(mat)) mat.forEach(disposeMaterial);
            else if (mat) disposeMaterial(mat);
          });
          renderer.dispose();
          paintRef.current = () => {};
          flyRef.current = () => {};
        };
      } catch {
        if (!disposed) setFailed(true);
      }
    };

    const start = () => {
      if (started || disposed) return;
      started = true;
      void init();
    };

    if (typeof IntersectionObserver === "undefined") {
      start();
    } else {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io?.disconnect();
            io = null;
            start();
          }
        },
        { rootMargin: "300px" }
      );
      io.observe(stage);
    }

    return () => {
      disposed = true;
      io?.disconnect();
      cleanup?.();
    };
  }, [tables]);

  return (
    <div
      ref={stageRef}
      className="relative h-[340px] overflow-hidden rounded-[8px] border border-gold-400/40 bg-ink-800/70 sm:h-[380px]"
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full touch-none"
        aria-label="Mapa 3D interativo das mesas do restaurante"
      />

      {/* zona */}
      <div className="absolute left-2 top-2 flex rounded-full border border-cream/15 bg-ink-900/80 p-0.5 backdrop-blur">
        {(["interior", "explanada"] as const).map((z) => (
          <button
            key={z}
            type="button"
            onClick={() => setZone(z)}
            aria-pressed={zone === z}
            className={`rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] transition ${
              zone === z ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"
            }`}
          >
            {zoneConfig[z].name}
          </button>
        ))}
      </div>

      {/* câmara */}
      <div className="absolute right-2 top-2 flex rounded-full border border-cream/15 bg-ink-900/80 p-0.5 backdrop-blur">
        {(
          [
            ["persp", "3D"],
            ["top", "Topo"],
          ] as const
        ).map(([m, label]) => (
          <button
            key={m}
            type="button"
            onClick={() => setCam(m)}
            aria-pressed={cam === m}
            className={`rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] transition ${
              cam === m ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="pointer-events-none absolute inset-x-2 bottom-2 rounded-md bg-ink-900/80 px-2 py-1.5 text-center text-[9px] leading-tight text-cream/55">
        Arraste para rodar · pinça/roda para aproximar · toque numa mesa
      </p>

      {!ready && !failed && (
        <div className="absolute inset-0 grid place-items-center bg-ink-900/85">
          <p className="text-[10px] uppercase tracking-[0.26em] text-cream/50">
            A carregar mapa 3D…
          </p>
        </div>
      )}

      {failed && (
        <div className="absolute inset-0 overflow-auto bg-ink-900/95 p-2.5">
          <p className="mb-2 text-[9px] uppercase tracking-[0.18em] text-cream/45">
            Mapa 3D indisponível — escolha a mesa na lista:
          </p>
          {(["interior", "explanada"] as const).map((z) => (
            <div key={z} className="mb-2 last:mb-0">
              <p className="mb-1 text-[9px] uppercase tracking-[0.18em] text-gold-400/80">
                {zoneConfig[z].name}
              </p>
              <div className="grid grid-cols-6 gap-1">
                {tables
                  .filter((t) => t.zone === z)
                  .slice()
                  .sort((a, b) => a.id - b.id)
                  .map((t) => {
                    const st = statuses[t.id] ?? "unavailable";
                    return (
                      <button
                        key={t.id}
                        type="button"
                        disabled={st !== "available"}
                        onClick={() => onSelect(t.id)}
                        aria-pressed={selected === t.id}
                        className={`rounded border py-1 text-[10px] font-bold transition ${
                          selected === t.id
                            ? "border-gold-300 bg-gold-400/25 text-gold-200"
                            : st === "available"
                              ? "border-cream/20 text-cream/75 hover:border-gold-400/50"
                              : st === "reserved"
                                ? "cursor-not-allowed border-flame-500/50 text-flame-300/70"
                                : "cursor-not-allowed border-cream/10 text-cream/25"
                        }`}
                      >
                        {t.id}
                      </button>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
