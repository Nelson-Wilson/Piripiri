import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { gzipSync } from "node:zlib";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";
import { networkInterfaces } from "node:os";

const ROOT = resolve(process.cwd(), "out");
const PORT = Number(process.env.PORT || 3000);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
};

const COMPRESSIBLE = new Set([".html", ".js", ".mjs", ".css", ".json", ".svg", ".txt", ".xml", ".webmanifest"]);

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const safe = normalize(clean).replace(/^(\.\.[/\\])+/, "");
  let file = join(ROOT, safe);
  if (!file.startsWith(ROOT + sep) && file !== ROOT) return null;

  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
  else if (!existsSync(file) && existsSync(`${file}.html`)) file = `${file}.html`;

  return existsSync(file) && statSync(file).isFile() ? file : null;
}

const server = createServer(async (req, res) => {
  const file = resolveFile(req.url || "/");
  if (!file) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 — não encontrado");
    return;
  }

  const ext = extname(file).toLowerCase();
  const isStatic = file.includes(`${sep}_next${sep}static${sep}`);
  const headers = {
    "Content-Type": MIME[ext] || "application/octet-stream",
    "Cache-Control": isStatic ? "public, max-age=31536000, immutable" : ext === ".html" ? "no-cache" : "public, max-age=3600",
    Vary: "Accept-Encoding",
  };

  if (COMPRESSIBLE.has(ext) && String(req.headers["accept-encoding"] || "").includes("gzip")) {
    const body = gzipSync(await readFile(file), { level: 9 });
    headers["Content-Encoding"] = "gzip";
    headers["Content-Length"] = body.length;
    res.writeHead(200, headers);
    res.end(body);
    return;
  }

  headers["Content-Length"] = statSync(file).size;
  res.writeHead(200, headers);
  createReadStream(file).pipe(res);
});

server.listen(PORT, "0.0.0.0", () => {
  const lan = Object.values(networkInterfaces())
    .flat()
    .find((n) => n && n.family === "IPv4" && !n.internal && n.address.startsWith("10."));
  console.log(`Local:   http://localhost:${PORT}`);
  if (lan) console.log(`Telemóvel: http://${lan.address}:${PORT}`);
});
