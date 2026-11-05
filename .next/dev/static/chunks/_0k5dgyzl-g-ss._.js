(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function About() {
    _s();
    const [i, setI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "About.useCallback[go]": (d)=>setI({
                "About.useCallback[go]": (v)=>(v + d + __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].length
            }["About.useCallback[go]"])
    }["About.useCallback[go]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "About.useEffect": ()=>{
            const t = window.setInterval({
                "About.useEffect.t": ()=>go(1)
            }["About.useEffect.t"], 7000);
            return ({
                "About.useEffect": ()=>window.clearInterval(t)
            })["About.useEffect"];
        }
    }["About.useEffect"], [
        go
    ]);
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"][i];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "sobre",
        className: "relative overflow-hidden bg-ink-900 bg-texture bg-cover bg-center lg:grid lg:grid-cols-[34%_1fr]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/10] lg:aspect-auto lg:min-h-[320px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: "/images/p13.webp",
                        alt: "Fachada do Restaurante Píri Píri na Av. 24 de Julho, Maputo",
                        fill: true,
                        sizes: "(max-width: 1024px) 100vw, 34vw",
                        className: "object-cover photo-grade"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-ink-900/70 max-lg:bg-gradient-to-t max-lg:from-ink-900/80"
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative grid items-center gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:px-10 lg:py-10 xl:pr-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] font-bold uppercase tracking-[0.3em] text-flame-400",
                                children: "Sobre nós"
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "h-display mt-2 text-[10vw] leading-[0.98] text-gold-400 sm:text-[6vw] lg:text-[36px] xl:text-[40px]",
                                children: [
                                    "Uma tradição que",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/About.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    "atravessa gerações"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 max-w-[430px] text-[13.5px] leading-[1.75] text-cream/80",
                                children: "Há décadas servimos o verdadeiro sabor do frango na brasa e os melhores camarões grelhados de Maputo. O Restaurante Piri Piri tornou-se uma referência pela qualidade, tradição e atendimento."
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contactos",
                                className: "btn btn-gold mt-5 !px-6 !py-3 !text-[11px]",
                                children: [
                                    "Conheça-nos ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/About.tsx",
                                        lineNumber: 48,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "criticas",
                            className: "scroll-mt-28 rounded-[14px] border border-gold-400/20 bg-ink-900/90 p-5 shadow-card backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                    className: "h-6 w-6 fill-gold-400 text-gold-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "anim-fade-in min-h-[150px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[13px] leading-relaxed text-cream/90",
                                            children: r.quote
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 flex gap-0.5",
                                            children: Array.from({
                                                length: 5
                                            }).map((_, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: `h-3.5 w-3.5 ${k < r.stars ? "fill-gold-400 text-gold-400" : "text-gold-400/25"}`
                                                }, k, false, {
                                                    fileName: "[project]/components/About.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-[11px] text-cream/55",
                                            children: [
                                                r.author,
                                                " · ",
                                                r.meta
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex justify-end gap-1.5",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviews"].map((_, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setI(k),
                                            "aria-label": `Crítica ${k + 1}`,
                                            className: `h-2 rounded-full transition-all ${k === i ? "w-5 bg-gold-400" : "w-2 bg-cream/30"}`
                                        }, k, false, {
                                            fileName: "[project]/components/About.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/About.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/About.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_s(About, "J5kOnv/+pmHAX+6vUCzBYfdYfPQ=");
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const bbox = [
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordinates"].lng - 0.006,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordinates"].lat - 0.004,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordinates"].lng + 0.006,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordinates"].lat + 0.004
].join("%2C");
const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordinates"].lat}%2C${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coordinates"].lng}`;
/** Índice 0 = domingo (igual a Date.getDay()). */ const hours = [
    {
        day: "domingo",
        time: "09:00–00:00",
        open: 9,
        close: 24
    },
    {
        day: "segunda-feira",
        time: "09:00–00:00",
        open: 9,
        close: 24
    },
    {
        day: "terça-feira",
        time: "09:00–00:00",
        open: 9,
        close: 24
    },
    {
        day: "quarta-feira",
        time: "09:00–00:00",
        open: 9,
        close: 24
    },
    {
        day: "quinta-feira",
        time: "09:00–00:00",
        open: 9,
        close: 24
    },
    {
        day: "sexta-feira",
        time: "09:00–02:00",
        open: 9,
        close: 26
    },
    {
        day: "sábado",
        time: "09:00–02:00",
        open: 9,
        close: 26
    }
];
/** Hora actual em Maputo (UTC+2). Devolve o dia da semana (0–6) e horas decimais. */ function maputoNow() {
    const d = new Date(Date.now() + 2 * 3600 * 1000);
    return {
        dow: d.getUTCDay(),
        h: d.getUTCHours() + d.getUTCMinutes() / 60
    };
}
const isOpen = (dow, h)=>{
    if (h >= hours[dow].open && h < Math.min(hours[dow].close, 24)) return true;
    const prev = hours[(dow + 6) % 7];
    return prev.close > 24 && h < prev.close - 24;
};
const Dot = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-flame-500 text-cream",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Dot;
function Contact() {
    _s();
    const [today, setToday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [openNow, setOpenNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Contact.useEffect": ()=>{
            const tick = {
                "Contact.useEffect.tick": ()=>{
                    const { dow, h } = maputoNow();
                    setToday(dow);
                    setOpenNow(isOpen(dow, h));
                }
            }["Contact.useEffect.tick"];
            tick();
            const id = setInterval(tick, 60000);
            return ({
                "Contact.useEffect": ()=>clearInterval(id)
            })["Contact.useEffect"];
        }
    }["Contact.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contactos",
        className: "relative overflow-hidden border-t border-cream/10 bg-ink-900 bg-clean bg-cover bg-center py-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute inset-0 bg-ink-900/80"
            }, void 0, false, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x relative z-10 grid items-center gap-6 lg:grid-cols-[1.15fr_1fr_1fr_1fr_1.1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden text-flame-400 sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "h-7 w-7 fill-flame-500 text-flame-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 60,
                                    columnNumber: 60
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-[0.2em] text-flame-400",
                                        children: "Contacte-nos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-sans text-[20px] font-extrabold leading-tight text-cream",
                                        children: "Estamos sempre à sua disposição"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.05,
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 68,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] leading-snug",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-cream",
                                        children: "Av. 24 de Julho"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cream/60",
                                        children: "Maputo, Moçambique"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cream/40",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["facts"].plusCode
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.1,
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 77,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] leading-snug",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telHref"],
                                        className: "font-semibold text-cream hover:text-gold-300",
                                        children: "84 672 4350"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-cream/60",
                                        children: "(Chamadas / WhatsApp)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.15,
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Dot, {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 85,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[12px] leading-snug",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-cream",
                                        children: openNow === null ? "Horário" : openNow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-green-400",
                                            children: "Aberto agora"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 88,
                                            columnNumber: 57
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-flame-400",
                                            children: "Fechado agora"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 88,
                                            columnNumber: 112
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-1 space-y-px text-[10.5px] text-cream/60",
                                        children: hours.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: `flex justify-between gap-3 ${i === today ? "font-semibold text-cream" : ""}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: h.day
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: h.time
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Contact.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, h.day, true, {
                                                fileName: "[project]/components/Contact.tsx",
                                                lineNumber: 92,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/Contact.tsx",
                                        lineNumber: 90,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Contact.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative h-[112px] overflow-hidden rounded-[10px] border border-cream/15",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                    title: "Mapa — Restaurante Píri Píri, Av. 24 de Julho, Maputo",
                                    src: mapSrc,
                                    className: "absolute inset-0 h-full w-full opacity-75 grayscale-[0.5] contrast-[1.1]",
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer-when-downgrade"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapsHref"],
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "absolute bottom-1.5 right-1.5 flex items-center gap-1.5 rounded-full bg-ink-900/90 px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-gold-300",
                                    children: [
                                        "Como chegar ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Contact.tsx",
                                            lineNumber: 116,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Contact.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(Contact, "G04nezgmHPM8sVrrRWvxvPnqrgo=");
_c1 = Contact;
var _c, _c1;
__turbopack_context__.k.register(_c, "Dot");
__turbopack_context__.k.register(_c1, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Cursor.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Cursor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Cursor() {
    _s();
    const dot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ring = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cursor.useEffect": ()=>{
            if (window.matchMedia("(hover: none)").matches) return;
            let rx = window.innerWidth / 2;
            let ry = window.innerHeight / 2;
            let mx = rx;
            let my = ry;
            let raf = 0;
            const move = {
                "Cursor.useEffect.move": (e)=>{
                    mx = e.clientX;
                    my = e.clientY;
                    if (dot.current) dot.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
                    const t = e.target;
                    const interactive = !!t.closest("a, button, [data-cursor='grow']");
                    setActive(interactive);
                }
            }["Cursor.useEffect.move"];
            const loop = {
                "Cursor.useEffect.loop": ()=>{
                    rx += (mx - rx) * 0.16;
                    ry += (my - ry) * 0.16;
                    if (ring.current) ring.current.style.transform = `translate3d(${rx - 20}px, ${ry - 20}px, 0)`;
                    raf = requestAnimationFrame(loop);
                }
            }["Cursor.useEffect.loop"];
            window.addEventListener("mousemove", move, {
                passive: true
            });
            raf = requestAnimationFrame(loop);
            return ({
                "Cursor.useEffect": ()=>{
                    window.removeEventListener("mousemove", move);
                    cancelAnimationFrame(raf);
                }
            })["Cursor.useEffect"];
        }
    }["Cursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: "pointer-events-none fixed inset-0 z-[150] hidden md:block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: ring,
                className: "cursor-ring absolute left-0 top-0 h-10 w-10 rounded-full border transition-[width,height,opacity,background-color,border-color] duration-300",
                style: {
                    borderColor: active ? "rgba(255,212,137,0.95)" : "rgba(232,163,61,0.45)",
                    backgroundColor: active ? "rgba(232,163,61,0.12)" : "transparent",
                    boxShadow: active ? "0 0 40px rgba(232,163,61,0.35)" : "none"
                }
            }, void 0, false, {
                fileName: "[project]/components/Cursor.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: dot,
                className: "cursor-dot absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-gold-300 shadow-[0_0_12px_rgba(255,212,137,0.9)]"
            }, void 0, false, {
                fileName: "[project]/components/Cursor.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Cursor.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Cursor, "MxUjq88F/h6spYhFh6oYyL3bAxI=");
_c = Cursor;
var _c;
__turbopack_context__.k.register(_c, "Cursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Delivery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Delivery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Delivery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-[14px] bg-[#7a0b10] bg-delivery bg-cover bg-[52%_center] p-5 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute inset-0 bg-[linear-gradient(100deg,rgba(70,4,8,0.9)_0%,rgba(100,8,12,0.55)_45%,rgba(122,11,16,0)_85%)]"
            }, void 0, false, {
                fileName: "[project]/components/Delivery.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-bold uppercase leading-tight tracking-[0.12em] text-cream",
                        children: "Entrega ao domicílio"
                    }, void 0, false, {
                        fileName: "[project]/components/Delivery.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-display text-[34px] uppercase leading-none text-gold-400",
                        children: "Cidade de Maputo"
                    }, void 0, false, {
                        fileName: "[project]/components/Delivery.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telHref"],
                        className: "mt-3 flex items-center gap-3 text-cream",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "grid h-9 w-9 place-items-center rounded-full bg-ink-900/50 ring-1 ring-gold-400/60",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "h-4 w-4 text-gold-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/Delivery.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Delivery.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] uppercase tracking-[0.2em] text-cream/80",
                                        children: "Ligue agora"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Delivery.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-[26px] leading-none tracking-wide",
                                        children: "84 672 4350"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Delivery.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Delivery.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Delivery.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex flex-wrap items-center gap-x-4 gap-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waHref"],
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-gold !px-4 !py-2 !text-[10px]",
                                children: [
                                    "WhatsApp ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Delivery.tsx",
                                        lineNumber: 25,
                                        columnNumber: 22
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Delivery.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contactos",
                                className: "text-[10px] uppercase tracking-[0.2em] text-cream/85 underline-offset-4 hover:underline",
                                children: "Ver mapa e horários"
                            }, void 0, false, {
                                fileName: "[project]/components/Delivery.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Delivery.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Delivery.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Delivery.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Delivery;
var _c;
__turbopack_context__.k.register(_c, "Delivery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FloorPlanModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloorPlanModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/reservas.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const plans = {
    interior: {
        src: "/images/planta-interior.png",
        width: 2707,
        height: 1440,
        alt: "Planta do Interior do Restaurante Píri Píri com as mesas numeradas de 1 a 21",
        caption: "Interior · mesas 1 a 21"
    },
    explanada: {
        src: "/images/planta-explanada.png",
        width: 3110,
        height: 1457,
        alt: "Planta da Explanada do Restaurante Píri Píri com as mesas numeradas de 101 a 115",
        caption: "Explanada · mesas 101 a 115"
    }
};
function FloorPlanModal({ initialZone, onClose }) {
    _s();
    const [zone, setZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialZone);
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    const plan = plans[zone];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloorPlanModal.useEffect": ()=>{
            onCloseRef.current = onClose;
        }
    }["FloorPlanModal.useEffect"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FloorPlanModal.useEffect": ()=>{
            const previous = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            closeRef.current?.focus();
            const onKey = {
                "FloorPlanModal.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") onCloseRef.current();
                }
            }["FloorPlanModal.useEffect.onKey"];
            window.addEventListener("keydown", onKey);
            return ({
                "FloorPlanModal.useEffect": ()=>{
                    document.body.style.overflow = previous;
                    window.removeEventListener("keydown", onKey);
                }
            })["FloorPlanModal.useEffect"];
        }
    }["FloorPlanModal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[160] flex items-center justify-center bg-ink-900/90 p-3 backdrop-blur-sm sm:p-6",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Plantas reais das mesas",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex max-h-[92vh] w-full max-w-[1100px] flex-col overflow-hidden rounded-[14px] border border-gold-400/50 bg-ink-900 shadow-2xl",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start justify-between gap-3 border-b border-cream/10 px-4 py-3 sm:px-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "h-display slant text-[22px] leading-none text-gold-400 sm:text-[26px]",
                                    children: "Planta real"
                                }, void 0, false, {
                                    fileName: "[project]/components/FloorPlanModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[10px] uppercase tracking-[0.22em] text-cream/45",
                                    children: "Posições reais das mesas"
                                }, void 0, false, {
                                    fileName: "[project]/components/FloorPlanModal.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FloorPlanModal.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            ref: closeRef,
                            type: "button",
                            onClick: onClose,
                            "aria-label": "Fechar planta",
                            className: "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-cream/20 text-cream/70 transition hover:border-gold-400/60 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/components/FloorPlanModal.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/FloorPlanModal.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FloorPlanModal.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center justify-between gap-2 px-4 pt-3 sm:px-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex rounded-full border border-cream/15 bg-ink-800 p-0.5",
                            role: "tablist",
                            "aria-label": "Zona da planta",
                            children: [
                                "interior",
                                "explanada"
                            ].map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    role: "tab",
                                    "aria-selected": zone === z,
                                    onClick: ()=>setZone(z),
                                    className: `rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] transition ${zone === z ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"}`,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoneConfig"][z].name
                                }, z, false, {
                                    fileName: "[project]/components/FloorPlanModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/FloorPlanModal.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: plan.src,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-300/90 transition hover:text-gold-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/FloorPlanModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                " Tamanho real"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FloorPlanModal.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FloorPlanModal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-auto w-[820px] max-w-none sm:w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: plan.src,
                            alt: plan.alt,
                            width: plan.width,
                            height: plan.height,
                            className: "h-auto w-full rounded-md border border-cream/10 bg-ink-800"
                        }, void 0, false, {
                            fileName: "[project]/components/FloorPlanModal.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FloorPlanModal.tsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/FloorPlanModal.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "shrink-0 border-t border-cream/10 px-4 py-2 text-center text-[10px] leading-relaxed text-cream/45",
                    children: [
                        plan.caption,
                        " · Imagem de referência. A disponibilidade em tempo real está no mapa 3D.",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sm:hidden",
                            children: " Arraste para os lados para ver toda a planta."
                        }, void 0, false, {
                            fileName: "[project]/components/FloorPlanModal.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/FloorPlanModal.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FloorPlanModal.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FloorPlanModal.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(FloorPlanModal, "BEPw8ILzY632u5ah9B4jA3sc2v4=");
_c = FloorPlanModal;
var _c;
__turbopack_context__.k.register(_c, "FloorPlanModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/menu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Gallery() {
    _s();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [all, setAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // faixa de destaque: camarão, frango, arroz de marisco, bife panado
    const strip = [
        "camarao-grelhado.webp",
        "frango-inteiro.webp",
        "arroz-marisco.webp",
        "bife-panado.webp"
    ].map((f)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"].findIndex((g)=>g.src.endsWith(f))).filter((i)=>i >= 0);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Gallery.useCallback[close]": ()=>setIdx(null)
    }["Gallery.useCallback[close]"], []);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Gallery.useCallback[next]": ()=>setIdx({
                "Gallery.useCallback[next]": (i)=>i === null ? i : (i + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"].length
            }["Gallery.useCallback[next]"])
    }["Gallery.useCallback[next]"], []);
    const prev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Gallery.useCallback[prev]": ()=>setIdx({
                "Gallery.useCallback[prev]": (i)=>i === null ? i : (i - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"].length
            }["Gallery.useCallback[prev]"])
    }["Gallery.useCallback[prev]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            if (idx === null) return;
            const onKey = {
                "Gallery.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") close();
                    if (e.key === "ArrowRight") next();
                    if (e.key === "ArrowLeft") prev();
                }
            }["Gallery.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            document.documentElement.style.overflow = "hidden";
            return ({
                "Gallery.useEffect": ()=>{
                    document.removeEventListener("keydown", onKey);
                    document.documentElement.style.overflow = "";
                }
            })["Gallery.useEffect"];
        }
    }["Gallery.useEffect"], [
        idx,
        close,
        next,
        prev
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "galeria",
        className: "relative overflow-hidden bg-ink-900 bg-texture bg-cover bg-[position:center_30%] py-14 md:py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-center gap-8 lg:grid-cols-[3fr_1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
                                children: strip.map((gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIdx(gi),
                                        "aria-label": `Ampliar: ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][gi].alt}`,
                                        "data-cursor": "grow",
                                        className: "group relative aspect-[4/3.2] overflow-hidden rounded-[10px] border border-gold-400/25",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][gi].src,
                                            alt: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][gi].alt,
                                            fill: true,
                                            sizes: "(max-width: 1024px) 45vw, 260px",
                                            className: "object-cover transition-transform duration-[1200ms] group-hover:scale-[1.08]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Gallery.tsx",
                                            lineNumber: 53,
                                            columnNumber: 17
                                        }, this)
                                    }, gi, false, {
                                        fileName: "[project]/components/Gallery.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Gallery.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "slant font-script text-[48px] font-bold leading-none text-gold-400",
                                        children: "Galeria"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Gallery.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-[220px] text-[13px] leading-relaxed text-cream/75",
                                        children: "Momentos que mostram o nosso sabor."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Gallery.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setAll((v)=>!v),
                                        className: "btn btn-ghost mt-5 !border-gold-400/60 !px-5 !py-2.5 !text-[10.5px] !text-gold-300",
                                        children: all ? "Ver Menos" : "Ver Mais Fotos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Gallery.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapsHref"],
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cream/60 hover:text-gold-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                className: "h-3.5 w-3.5 text-gold-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Gallery.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this),
                                            " Visitar o restaurante"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Gallery.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Gallery.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Gallery.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${all ? "" : "hidden"} mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"].map((g, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.03 * (i % 4),
                                className: g.wide ? "col-span-2" : "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIdx(i),
                                    className: `group relative block w-full overflow-hidden rounded-[16px] border border-cream/10 ${g.wide ? "aspect-[16/9.4]" : "aspect-[3/4]"}`,
                                    "aria-label": `Ampliar: ${g.alt}`,
                                    "data-cursor": "grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                            src: g.src,
                                            alt: g.alt,
                                            fill: true,
                                            sizes: "(max-width: 640px) 45vw, (max-width: 1024px) 46vw, 290px",
                                            className: "object-cover transition-transform duration-[1300ms] ease-out group-hover:scale-[1.1]",
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Gallery.tsx",
                                            lineNumber: 84,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-0 bg-gradient-to-t from-ink-900/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-95"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Gallery.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-x-0 bottom-0 translate-y-2 p-3 text-left text-[10px] leading-snug text-cream/75 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100",
                                            children: g.alt
                                        }, void 0, false, {
                                            fileName: "[project]/components/Gallery.tsx",
                                            lineNumber: 93,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-gold-400/40"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Gallery.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Gallery.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            }, g.src, false, {
                                fileName: "[project]/components/Gallery.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Gallery.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Gallery.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            idx !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "anim-fade-in fixed inset-0 z-[160] flex items-center justify-center bg-ink-900/95 p-4 backdrop-blur-lg",
                onClick: close,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: close,
                        "aria-label": "Fechar",
                        className: "absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-cream/20 text-cream transition-colors hover:border-gold-400 hover:text-gold-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/Gallery.tsx",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Gallery.tsx",
                        lineNumber: 108,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            prev();
                        },
                        "aria-label": "Anterior",
                        className: "absolute left-3 grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-gold-400 hover:text-gold-300 md:left-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/Gallery.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Gallery.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            next();
                        },
                        "aria-label": "Seguinte",
                        className: "absolute right-3 grid h-11 w-11 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-gold-400 hover:text-gold-300 md:right-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/components/Gallery.tsx",
                            lineNumber: 133,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Gallery.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>e.stopPropagation(),
                        className: "anim-modal-in relative w-full max-w-[820px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][idx].src,
                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][idx].alt,
                                width: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][idx].w,
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][idx].h,
                                className: "max-h-[80vh] w-full rounded-xl object-contain",
                                sizes: "90vw"
                            }, void 0, false, {
                                fileName: "[project]/components/Gallery.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-center text-[11px] tracking-wide text-cream/55",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gallery"][idx].alt
                            }, void 0, false, {
                                fileName: "[project]/components/Gallery.tsx",
                                lineNumber: 148,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/Gallery.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Gallery.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Gallery.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(Gallery, "BLTiZ2GXjJkBx78JDdExWgE7IA8=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bike.js [app-client] (ecmascript) <export default as Bike>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
"use client";
;
;
;
const perks = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        label: "Atendimento\nRápido"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
        label: "Take Away\nDisponível"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bike$3e$__["Bike"],
        label: "Entrega ao Domicílio\nem Maputo"
    }
];
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "inicio",
        className: "relative w-full overflow-hidden bg-ink-900 bg-[url('/images/bg/hero-mobile.webp')] bg-cover bg-[position:60%_0] bg-no-repeat lg:bg-[url('/images/bg/hero.webp')] lg:bg-[position:right_40%]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute inset-0 bg-gradient-to-t from-ink-900/55 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink-900/40 lg:via-transparent"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x relative z-10 flex min-h-[100svh] flex-col justify-end pb-14 pt-28 lg:min-h-[max(620px,43vw)] lg:justify-center lg:pb-10 lg:pt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[600px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-anim text-[11px] font-semibold uppercase tracking-[0.5em] text-gold-400",
                                style: {
                                    animationDelay: "0.05s"
                                },
                                children: "Restaurante Piri Piri"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "h-display mt-4 text-[14vw] leading-[0.92] text-cream sm:text-[10vw] lg:text-[5.4vw] xl:text-[78px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-anim block",
                                        style: {
                                            animationDelay: "0.15s"
                                        },
                                        children: "O verdadeiro sabor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hero-anim slant mt-1 block origin-left text-gold-400",
                                        style: {
                                            animationDelay: "0.25s"
                                        },
                                        children: "do frango na brasa"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "hero-anim mt-6 max-w-[430px] text-[14px] leading-relaxed text-cream/80",
                                style: {
                                    animationDelay: "0.38s"
                                },
                                children: "Somos a tradição do bom frango na brasa há décadas, e servimos os melhores camarões grelhados da praça."
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hero-anim mt-7 flex flex-wrap items-center gap-3",
                                style: {
                                    animationDelay: "0.48s"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#menu",
                                        className: "btn btn-gold group",
                                        children: [
                                            "Ver Menu",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telHref"],
                                        className: "btn btn-redline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "h-4 w-4 text-gold-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 41,
                                                columnNumber: 15
                                            }, this),
                                            "Pedir Agora"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "hero-anim mt-9 flex flex-wrap gap-x-7 gap-y-4",
                                style: {
                                    animationDelay: "0.6s"
                                },
                                children: perks.map(({ icon: Icon, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-7 w-7 shrink-0 text-gold-400",
                                                strokeWidth: 1.4
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "whitespace-pre-line text-[11px] leading-tight text-cream/85",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/components/Hero.tsx",
                                                lineNumber: 50,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/components/Hero.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "hero-anim absolute bottom-10 right-6 hidden -rotate-[8deg] text-right font-script text-[40px] font-bold leading-[0.95] text-cream drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)] lg:block xl:right-12",
                        style: {
                            animationDelay: "0.72s"
                        },
                        children: [
                            "Mais Sabor,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold-400",
                                children: "Mais Tradição!"
                            }, void 0, false, {
                                fileName: "[project]/components/Hero.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlameMark",
    ()=>FlameMark,
    "Wordmark",
    ()=>Wordmark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
;
;
;
function FlameMark({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 64 64",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 w-9", className),
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "flameMark",
                    x1: "0",
                    y1: "1",
                    x2: "0",
                    y2: "0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#8c1209"
                        }, void 0, false, {
                            fileName: "[project]/components/Logo.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0.5",
                            stopColor: "#e8391b"
                        }, void 0, false, {
                            fileName: "[project]/components/Logo.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#ffd489"
                        }, void 0, false, {
                            fileName: "[project]/components/Logo.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Logo.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M32 4c2.8 9.6 10.4 12.8 10.4 23.6 0 2.9-.8 5.2-2.1 7 2.1-1.1 3.8-3 4.8-5.4 1.3 3.5 2 6.9 2 10C47.1 52.6 40.3 60 32 60S16.9 52.6 16.9 39.2c0-9.8 5.8-13.7 8.3-20.3.7 3.8-.4 6.9-2.1 9.5 3.8-2.8 6-6.9 6-12.5 0-4 1.6-8.2 2.9-11.9Z",
                fill: "url(#flameMark)"
            }, void 0, false, {
                fileName: "[project]/components/Logo.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Logo.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = FlameMark;
function Wordmark({ className, small }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
            src: "/images/logo-piripiri-trumpet.png",
            alt: "Piri Piri Maputo",
            width: 420,
            height: 399,
            priority: true,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-auto transition-all duration-500", small ? "h-10" : "h-12")
        }, void 0, false, {
            fileName: "[project]/components/Logo.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Logo.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = Wordmark;
var _c, _c1;
__turbopack_context__.k.register(_c, "FlameMark");
__turbopack_context__.k.register(_c1, "Wordmark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MenuSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MenuSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/menu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/menu-en.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useMenuLang$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/useMenuLang.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function MenuSection() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Carnes");
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useMenuLang$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuLang"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ui"][lang];
    const cards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MenuSection.useMemo[cards]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dishes"].filter({
                "MenuSection.useMemo[cards]": (d)=>d.cat === active && d.img
            }["MenuSection.useMemo[cards]"])
    }["MenuSection.useMemo[cards]"], [
        active
    ]);
    const book = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuBook"][active];
    const rail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRail = (d)=>rail.current?.scrollBy({
            left: d * 280,
            behavior: "smooth"
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "menu",
        className: "relative overflow-hidden bg-ink-900 bg-clean bg-cover bg-center py-14 md:py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute -bottom-6 -left-4 h-[300px] w-[460px] bg-embers bg-cover bg-left-bottom opacity-90 [mask-image:linear-gradient(90deg,#000_55%,transparent)]"
            }, void 0, false, {
                fileName: "[project]/components/MenuSection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "slant font-script text-[44px] font-bold leading-none text-gold-400",
                                        children: t.kicker
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuSection.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "h-display text-[13vw] leading-[0.95] text-cream sm:text-[9vw] lg:text-[56px]",
                                        children: t.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuSection.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MenuSection.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.1,
                                className: "flex flex-col items-start gap-3 md:items-end",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useMenuLang$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangSwitch"], {
                                        lang: lang,
                                        setLang: setLang
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuSection.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-[300px] text-[12.5px] leading-relaxed text-cream/50 md:text-right",
                                        children: t.sub
                                    }, void 0, false, {
                                        fileName: "[project]/components/MenuSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MenuSection.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MenuSection.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-9 -mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex min-w-max gap-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActive(c),
                                    className: `relative rounded-full border px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${active === c ? "border-gold-400/60 bg-gold-400/10 text-gold-200 shadow-[0_0_30px_-8px_rgba(232,163,61,0.7)]" : "border-cream/12 text-cream/45 hover:border-cream/25 hover:text-cream/75"}`,
                                    children: lang === "en" ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryEn"][c] : c
                                }, c, false, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/MenuSection.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MenuSection.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollRail(-1),
                                "aria-label": t.prev,
                                className: "absolute -left-3 top-1/3 z-20 hidden h-10 w-10 place-items-center rounded-full bg-flame-500 text-cream shadow-lg md:grid",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 58,
                                    columnNumber: 203
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MenuSection.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>scrollRail(1),
                                "aria-label": t.next,
                                className: "absolute -right-3 top-1/3 z-20 hidden h-10 w-10 place-items-center rounded-full bg-flame-500 text-cream shadow-lg md:grid",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 203
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MenuSection.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: rail,
                                className: "-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                                children: cards.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        style: {
                                            animationDelay: `${0.05 * i}s`
                                        },
                                        className: "anim-fade-up group relative flex w-[200px] shrink-0 snap-start flex-col overflow-hidden rounded-[10px] border border-gold-400/25 bg-ink-900 sm:w-[216px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative aspect-[4/3] overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                        src: d.img,
                                                        alt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"])(lang, d.name),
                                                        fill: true,
                                                        sizes: "(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 300px",
                                                        className: "object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.08]",
                                                        style: {
                                                            objectPosition: d.pos
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuSection.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-t from-ink-900/95 via-ink-900/25 to-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuSection.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    d.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute left-3 top-3 rounded-full border border-gold-400/30 bg-ink-900/70 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.16em] text-gold-200 backdrop-blur-md",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"])(lang, d.badge)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuSection.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MenuSection.tsx",
                                                lineNumber: 67,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 flex-col p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-display text-[14px] uppercase leading-tight tracking-wide text-cream",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"])(lang, d.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuSection.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `mt-1 flex-1 font-display text-[19px] leading-none ${d.price ? "text-gold-400" : "text-cream/35 !text-[11px] tracking-[0.14em] uppercase"}`,
                                                        children: d.price ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"])(lang, "Preço sob consulta")
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuSection.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waHref"],
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "btn btn-gold mt-3 !rounded-full !px-3 !py-2 !text-[11px]",
                                                        children: t.order
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MenuSection.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MenuSection.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, d.name, true, {
                                        fileName: "[project]/components/MenuSection.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/MenuSection.tsx",
                                lineNumber: 60,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MenuSection.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.05,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 rounded-[14px] border border-cream/10 bg-ink-900/85 p-5 backdrop-blur-sm sm:p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9.5px] uppercase tracking-[0.3em] text-gold-400/80",
                                            children: [
                                                t.book,
                                                " · ",
                                                lang === "en" ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryEn"][active] : active
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden text-[9px] uppercase tracking-[0.24em] text-cream/25 sm:block",
                                            children: t.bilingual
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-4 grid gap-x-10 gap-y-2.5 sm:grid-cols-2",
                                    children: book.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-baseline gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[12.5px] text-cream/75",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"])(lang, l.name)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuSection.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this),
                                                l.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase tracking-[0.14em] text-cream/30",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"])(lang, l.note ?? "")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuSection.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mx-0.5 h-px flex-1 border-b border-dotted border-cream/15"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuSection.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `shrink-0 font-display text-[12.5px] tracking-wide ${l.price ? "text-gold-300" : "text-cream/25"}`,
                                                    children: l.price ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2d$en$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"])(lang, "consultar")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuSection.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, l.name, true, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-[10px] leading-relaxed text-cream/30",
                                    children: t.note
                                }, void 0, false, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MenuSection.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MenuSection.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap items-center justify-between gap-5 rounded-[14px] border border-cream/10 bg-ink-900/85 px-5 py-4 backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "grid h-9 w-9 place-items-center rounded-full border border-gold-500/25",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                                className: "h-4 w-4 text-gold-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MenuSection.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11.5px] leading-snug text-cream/55",
                                            children: [
                                                t.avg,
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cream",
                                                    children: "800 – 1 400 MZN"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuSection.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 25
                                                }, this),
                                                " · ",
                                                t.dayDish
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waHref"],
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "btn btn-gold !py-2.5 !text-[10px]",
                                            children: t.orderBtn
                                        }, void 0, false, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/menu",
                                            className: "btn btn-ghost !py-2.5 !text-[10px]",
                                            children: [
                                                t.full,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuSection.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#galeria",
                                            className: "btn btn-ghost !py-2.5 !text-[10px]",
                                            children: [
                                                t.photos,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MenuSection.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/MenuSection.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/MenuSection.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/MenuSection.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MenuSection.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MenuSection.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MenuSection.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(MenuSection, "+NLGxxz4RnMRj+Md98glyjpLZio=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$useMenuLang$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMenuLang"]
    ];
});
_c = MenuSection;
var _c;
__turbopack_context__.k.register(_c, "MenuSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MobileBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MobileBar() {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileBar.useEffect": ()=>{
            const onScroll = {
                "MobileBar.useEffect.onScroll": ()=>setShow(window.scrollY > 520)
            }["MobileBar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "MobileBar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["MobileBar.useEffect"];
        }
    }["MobileBar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed inset-x-0 bottom-0 z-[110] border-t border-gold-500/20 bg-ink-900/92 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl transition-transform duration-500 lg:hidden ${show ? "translate-y-0" : "translate-y-full"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telHref"],
                    className: "btn btn-gold flex-1 !py-3 !text-[10.5px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/MobileBar.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        " Ligar"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MobileBar.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waHref"],
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn btn-fire flex-1 !py-3 !text-[10.5px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/components/MobileBar.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        " WhatsApp"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/MobileBar.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapsHref"],
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Como chegar",
                    className: "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cream/20 text-cream",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/components/MobileBar.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/MobileBar.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/MobileBar.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/MobileBar.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(MobileBar, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");
_c = MobileBar;
var _c;
__turbopack_context__.k.register(_c, "MobileBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const links = [
    {
        href: "#inicio",
        label: "Início"
    },
    {
        href: "#especialidades",
        label: "Especialidades"
    },
    {
        href: "#menu",
        label: "Menu"
    },
    {
        href: "#galeria",
        label: "Galeria"
    },
    {
        href: "#sobre",
        label: "Sobre"
    },
    {
        href: "#reservas",
        label: "Reserva"
    },
    {
        href: "#contactos",
        label: "Contactos"
    }
];
function Nav() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 60)
            }["Nav.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            document.documentElement.style.overflow = open ? "hidden" : "";
            return ({
                "Nav.useEffect": ()=>{
                    document.documentElement.style.overflow = "";
                }
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `fixed inset-x-0 top-0 z-[120] transition-all duration-500 ${scrolled ? "border-b border-gold-500/15 bg-ink-900/70 py-2.5 backdrop-blur-2xl supports-[backdrop-filter]:bg-ink-900/55" : "border-b border-transparent bg-gradient-to-b from-ink-900/85 to-transparent py-4"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-x flex items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#inicio",
                            "aria-label": "Piri Piri Maputo — início",
                            className: "shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wordmark"], {
                                small: scrolled
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center gap-1 lg:flex",
                            "aria-label": "Navegação principal",
                            children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.href,
                                    className: "group relative rounded-full px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-cream",
                                    children: [
                                        l.label,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-400 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Nav.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, l.href, true, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telHref"],
                                    className: "hidden items-center gap-2 text-[12px] font-semibold tracking-wide text-cream/80 transition-colors hover:text-gold-300 xl:flex",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "grid h-8 w-8 place-items-center rounded-full border border-gold-500/30 bg-gold-500/5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                className: "h-3.5 w-3.5 text-gold-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Nav.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Nav.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this),
                                        "84 672 4350"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contactos",
                                    className: "btn btn-gold hidden !px-5 !py-2.5 !text-[10.5px] sm:inline-flex",
                                    children: "Pedir agora"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(true),
                                    "aria-label": "Abrir menu",
                                    className: "grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream lg:hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Nav.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "anim-fade-in fixed inset-0 z-[130] flex flex-col bg-ink-900 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-80",
                        style: {
                            background: "radial-gradient(90% 60% at 50% 0%, rgba(194,32,15,0.28), transparent 65%), radial-gradient(60% 40% at 80% 90%, rgba(232,163,61,0.16), transparent 70%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-between px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wordmark"], {
                                small: true
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpen(false),
                                "aria-label": "Fechar menu",
                                className: "grid h-10 w-10 place-items-center rounded-full border border-cream/15",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Nav.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 96,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "relative flex flex-1 flex-col justify-center gap-1 px-6",
                        children: links.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                onClick: ()=>setOpen(false),
                                style: {
                                    animationDelay: `${0.06 * i + 0.08}s`
                                },
                                className: "anim-slide-left group flex items-baseline justify-between border-b border-cream/8 py-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-display text-[30px] uppercase leading-none text-cream group-hover:text-gold-300",
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] tracking-[0.3em] text-gold-500/50",
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 118,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, l.href, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 108,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 106,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative px-6 pb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telHref"],
                                className: "btn btn-gold w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Nav.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this),
                                    " 84 672 4350"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-center text-[10px] uppercase tracking-[0.32em] text-cream/40",
                                children: "Av. 24 de Julho · Maputo"
                            }, void 0, false, {
                                fileName: "[project]/components/Nav.tsx",
                                lineNumber: 126,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 122,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(Nav, "eMpPTtqqZxSNagOpvvzDYb1NomM=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Preloader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Preloader() {
    _s();
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("visible");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Preloader.useEffect": ()=>{
            const params = new URLSearchParams(window.location.search);
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            document.documentElement.classList.remove("pp-loaded");
            if (params.has("noanim") || reduce) {
                document.documentElement.classList.add("pp-loaded");
                setPhase("hidden");
                return;
            }
            document.documentElement.classList.add("no-scroll");
            const hold = window.setTimeout({
                "Preloader.useEffect.hold": ()=>{
                    document.documentElement.classList.add("pp-loaded");
                    setPhase("leaving");
                }
            }["Preloader.useEffect.hold"], 1500);
            const remove = window.setTimeout({
                "Preloader.useEffect.remove": ()=>{
                    document.documentElement.classList.remove("no-scroll");
                    setPhase("hidden");
                }
            }["Preloader.useEffect.remove"], 2400);
            return ({
                "Preloader.useEffect": ()=>{
                    window.clearTimeout(hold);
                    window.clearTimeout(remove);
                    document.documentElement.classList.remove("no-scroll");
                }
            })["Preloader.useEffect"];
        }
    }["Preloader.useEffect"], []);
    if (phase === "hidden") return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        className: `pp-preloader fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900 ${phase === "leaving" ? "pp-preloader-out" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-70",
                style: {
                    background: "radial-gradient(60% 50% at 50% 62%, rgba(194,32,15,0.32), transparent 70%), radial-gradient(40% 30% at 50% 40%, rgba(232,163,61,0.18), transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pp-preloader-logo relative z-10 flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/logo-piripiri-trumpet.png",
                        alt: "Piri Piri Maputo",
                        width: 420,
                        height: 399,
                        fetchPriority: "high",
                        className: "h-40 w-auto sm:h-48"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-[10px] uppercase tracking-[0.55em] text-gold-400/70",
                        children: "Maputo · desde sempre"
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mt-7 h-[2px] w-40 overflow-hidden bg-cream/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pp-preloader-bar absolute inset-y-0 left-0 bg-gradient-to-r from-flame-600 via-ember to-gold-300"
                        }, void 0, false, {
                            fileName: "[project]/components/Preloader.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Preloader.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Preloader.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Preloader.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(Preloader, "OPTTmZ5Rj+1oeZ57Cc9cUgl4O0U=");
_c = Preloader;
var _c;
__turbopack_context__.k.register(_c, "Preloader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reservas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reservas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript) <export default as CalendarCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pinned.js [app-client] (ecmascript) <export default as MapPinned>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$soup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Soup$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/soup.js [app-client] (ecmascript) <export default as Soup>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TableMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TableMap3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloorPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FloorPlanModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/menu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/reservas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
/* ---------- helpers ---------- */ const pad = (n)=>String(n).padStart(2, "0");
const toMin = (t)=>{
    const [h, m] = t.split(":").map(Number);
    return h * 60 + m;
};
const slots = [];
for(let m = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openMinutes"]; m <= __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeMinutes"]; m += __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slotStep"])slots.push(`${pad(Math.floor(m / 60))}:${pad(m % 60)}`);
/** Hora actual em Maputo (UTC+2). */ function maputoNow() {
    const d = new Date(Date.now() + 2 * 3600 * 1000);
    return {
        today: d.toISOString().slice(0, 10),
        nowMin: d.getUTCHours() * 60 + d.getUTCMinutes()
    };
}
const fmtDate = (iso)=>iso.split("-").reverse().join("/");
const fmtPhone = (v)=>{
    let d = v.replace(/\D/g, "");
    if (d.startsWith("258") && d.length > 9) d = d.slice(3);
    d = d.slice(0, 9);
    return [
        d.slice(0, 2),
        d.slice(2, 5),
        d.slice(5, 9)
    ].filter(Boolean).join(" ");
};
/* ---------- ícone de mesa (o mesmo do design, usado em 3 sítios) ---------- */ function TableIcon({ className = "h-5 w-5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 10h14M7 10v9M17 10v9M12 10v4"
            }, void 0, false, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 10h18"
            }, void 0, false, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4 4h3v4M20 4h-3v4"
            }, void 0, false, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Reservas.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_c = TableIcon;
/* ---------- campos ---------- */ const fieldCls = "h-10 w-full rounded-lg border border-gold-400/55 bg-ink-800/90 px-3 text-[12.5px] text-cream outline-none transition placeholder:text-cream/35 focus:border-gold-300 focus:ring-1 focus:ring-gold-300 aria-[invalid=true]:border-flame-400";
function Field({ id, label, icon, error, children, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "mb-1.5 flex items-center gap-2 text-[11px] font-medium text-cream",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gold-400",
                        children: icon
                    }, void 0, false, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            children,
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${id}-err`,
                role: "alert",
                className: "mt-1 text-[10.5px] text-flame-300",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Reservas.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_c1 = Field;
function SelectWrap({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-400"
            }, void 0, false, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Reservas.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, this);
}
_c2 = SelectWrap;
function Reservas() {
    _s();
    const [clock, setClock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        today: "",
        nowMin: 0
    });
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("19:00");
    const [people, setPeople] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [dishes, setDishes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [customDish, setCustomDish] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuCat, setMenuCat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Carnes");
    const [plansOpen, setPlansOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mapZone, setMapZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("interior");
    const [table, setTable] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* relógio de Maputo + data por omissão (hoje) */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reservas.useEffect": ()=>{
            const tick = {
                "Reservas.useEffect.tick": ()=>setClock(maputoNow())
            }["Reservas.useEffect.tick"];
            tick();
            const id = setInterval(tick, 60000);
            return ({
                "Reservas.useEffect": ()=>clearInterval(id)
            })["Reservas.useEffect"];
        }
    }["Reservas.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reservas.useEffect": ()=>{
            if (clock.today && !date) setDate(clock.today);
        }
    }["Reservas.useEffect"], [
        clock.today,
        date
    ]);
    /* menu de escolha de pratos: bloqueia o scroll e fecha com Esc */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reservas.useEffect": ()=>{
            if (!menuOpen) return;
            const onKey = {
                "Reservas.useEffect.onKey": (e)=>{
                    if (e.key === "Escape") setMenuOpen(false);
                }
            }["Reservas.useEffect.onKey"];
            document.addEventListener("keydown", onKey);
            const prev = document.documentElement.style.overflow;
            document.documentElement.style.overflow = "hidden";
            return ({
                "Reservas.useEffect": ()=>{
                    document.removeEventListener("keydown", onKey);
                    document.documentElement.style.overflow = prev;
                }
            })["Reservas.useEffect"];
        }
    }["Reservas.useEffect"], [
        menuOpen
    ]);
    /* reservas guardadas neste dispositivo */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reservas.useEffect": ()=>{
            try {
                const raw = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageKey"]);
                if (raw) {
                    // compatibilidade com reservas antigas (campo `dish` singular)
                    const parsed = JSON.parse(raw);
                    setBookings(parsed.map({
                        "Reservas.useEffect": (b)=>({
                                ...b,
                                dishes: b.dishes ?? (b.dish && b.dish !== "Decidir no local" ? [
                                    b.dish
                                ] : [])
                            })
                    }["Reservas.useEffect"]));
                }
            } catch  {
            /* sem armazenamento disponível */ }
        }
    }["Reservas.useEffect"], []);
    /* horários: no próprio dia, os que já passaram ficam desactivados */ const slotDisabled = (s)=>date === clock.today && toMin(s) <= clock.nowMin;
    const enabledSlots = slots.filter((s)=>!slotDisabled(s));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reservas.useEffect": ()=>{
            if (!date) return;
            if (time && slots.includes(time) && !slotDisabled(time)) return;
            setTime(enabledSlots.includes("19:00") ? "19:00" : enabledSlots[0] ?? "");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Reservas.useEffect"], [
        date,
        clock.nowMin
    ]);
    /* estado de cada mesa para a data/hora/nº de pessoas escolhidos */ const reserved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Reservas.useMemo[reserved]": ()=>{
            const set = new Set();
            if (!time) return set;
            for (const b of bookings)if (b.date === date && Math.abs(toMin(b.time) - toMin(time)) < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stayMinutes"]) set.add(b.table);
            return set;
        }
    }["Reservas.useMemo[reserved]"], [
        bookings,
        date,
        time
    ]);
    const statuses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Reservas.useMemo[statuses]": ()=>{
            const map = {};
            for (const t of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tables"]){
                map[t.id] = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["blockedTables"].includes(t.id) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seatsFor"])(t) < people ? "unavailable" : reserved.has(t.id) ? "reserved" : "available";
            }
            return map;
        }
    }["Reservas.useMemo[statuses]"], [
        reserved,
        people
    ]);
    const statusOf = (id)=>statuses[id] ?? "unavailable";
    const availableCount = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tables"].filter((t)=>statusOf(t.id) === "available").length;
    /* se a mesa escolhida deixar de estar livre, passa para a primeira livre */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reservas.useEffect": ()=>{
            if (table !== null && statusOf(table) === "available") return;
            const first = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tables"].find({
                "Reservas.useEffect.first": (t)=>statusOf(t.id) === "available"
            }["Reservas.useEffect.first"]);
            setTable(first ? first.id : null);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Reservas.useEffect"], [
        reserved,
        people
    ]);
    const pick = (id)=>{
        if (statusOf(id) !== "available") return;
        setTable(id);
        setErrors((e)=>({
                ...e,
                table: undefined
            }));
    };
    const toggleDish = (name)=>setDishes((prev)=>prev.includes(name) ? prev.filter((d)=>d !== name) : [
                ...prev,
                name
            ]);
    const addCustomDish = ()=>{
        const name = customDish.trim();
        if (!name) return;
        setDishes((prev)=>prev.some((d)=>d.toLowerCase() === name.toLowerCase()) ? prev : [
                ...prev,
                name
            ]);
        setCustomDish("");
    };
    const removeDish = (name)=>setDishes((prev)=>prev.filter((d)=>d !== name));
    const validate = ()=>{
        const e = {};
        if (name.trim().length < 3) e.name = "Indique o seu nome completo.";
        if (!/^8[2-7]\d{7}$/.test(phone.replace(/\D/g, ""))) e.phone = "Número inválido. Ex.: 84 123 4567";
        if (!date || date < clock.today) e.date = "Escolha uma data a partir de hoje.";
        if (!time) e.time = "Sem horários livres neste dia.";
        if (table === null || statusOf(table) !== "available") e.table = "Escolha uma mesa disponível.";
        return e;
    };
    const submit = (ev)=>{
        ev.preventDefault();
        const e = validate();
        setErrors(e);
        if (Object.keys(e).length) {
            const first = [
                "name",
                "phone",
                "date",
                "time",
                "table"
            ].find((k)=>e[k]);
            if (first) formRef.current?.querySelector(`#res-${first}`)?.focus();
            return;
        }
        const booking = {
            date,
            time,
            table: table,
            people,
            name: name.trim(),
            phone,
            dishes
        };
        const next = [
            ...bookings,
            booking
        ];
        setBookings(next);
        try {
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageKey"], JSON.stringify(next));
        } catch  {
        /* ignora */ }
        setDone(booking);
        window.open((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waReservasLink"])(waMessage(booking)), "_blank", "noopener,noreferrer");
    };
    const reset = ()=>{
        setDone(null);
        setName("");
        setPhone("");
        setDishes([]);
        setCustomDish("");
    };
    const selected = table;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "reservas",
        className: "relative scroll-mt-20 overflow-hidden border-t border-cream/10 bg-ink-900 bg-clean bg-cover bg-center py-14 lg:py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "pointer-events-none absolute right-0 top-0 h-[46%] w-full lg:h-[52%] lg:w-[64%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                        src: "/images/bg/hero.webp",
                        alt: "",
                        fill: true,
                        sizes: "64vw",
                        className: "object-cover object-[75%_20%] opacity-90"
                    }, void 0, false, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-ink-900 via-ink-900/55 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-x relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid items-center gap-5 lg:grid-cols-[auto_1fr] lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "flex items-center gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableIcon, {
                                        className: "h-12 w-12 shrink-0 text-gold-400 sm:h-14 sm:w-14"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "h-display text-[9.5vw] leading-[0.95] text-cream sm:text-[6vw] lg:text-[34px] xl:text-[40px]",
                                        children: [
                                            "Reserve a sua",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "slant mt-1 block text-[1.55em] leading-[0.9] text-gold-400",
                                                children: "mesa"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 308,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 block text-[0.78em]",
                                                children: "em poucos minutos"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.1,
                                className: "lg:border-l lg:border-cream/20 lg:pl-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "max-w-[330px] text-[14px] leading-relaxed text-cream/90",
                                        children: "Escolha os pratos que pretende, selecione a mesa e nós preparamos tudo para a sua chegada."
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        className: "paint-r mt-3 block h-2 w-48 -rotate-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid gap-5 lg:mt-10 lg:grid-cols-[0.96fr_1.04fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-full rounded-[14px] border border-gold-400/70 bg-ink-900/85 p-5 backdrop-blur-sm sm:p-6",
                                    children: done ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full min-h-[360px] flex-col items-center justify-center text-center",
                                        role: "status",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-14 w-14 place-items-center rounded-full bg-gold-400 text-ink-900",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    className: "h-7 w-7",
                                                    strokeWidth: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 327,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "h-display mt-4 text-[26px] text-gold-400",
                                                children: "Reserva registada"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 330,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 max-w-[340px] text-[13px] leading-relaxed text-cream/85",
                                                children: [
                                                    "Mesa ",
                                                    done.table,
                                                    " para ",
                                                    done.people,
                                                    " ",
                                                    done.people === 1 ? "pessoa" : "pessoas",
                                                    " no dia ",
                                                    fmtDate(done.date),
                                                    " às",
                                                    " ",
                                                    done.time,
                                                    ". ",
                                                    done.dishes.length > 0 ? `Pratos: ${done.dishes.join(", ")}.` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 331,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 max-w-[340px] text-[12px] leading-relaxed text-cream/60",
                                                children: "Abrimos o WhatsApp com os dados da reserva. Envie a mensagem para o restaurante a confirmar."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 335,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex flex-wrap justify-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waReservasLink"])(waMessage(done)),
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        className: "btn btn-gold !px-6 !py-3 !text-[11px]",
                                                        children: "Enviar por WhatsApp"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: reset,
                                                        className: "btn btn-ghost !px-6 !py-3 !text-[11px]",
                                                        children: "Nova reserva"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 338,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        ref: formRef,
                                        onSubmit: submit,
                                        noValidate: true,
                                        className: "grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                id: "res-name",
                                                label: "Nome Completo",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 68
                                                }, this),
                                                error: errors.name,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "res-name",
                                                    type: "text",
                                                    autoComplete: "name",
                                                    placeholder: "Ex: João da Silva",
                                                    value: name,
                                                    onChange: (e)=>setName(e.target.value),
                                                    "aria-invalid": !!errors.name,
                                                    "aria-describedby": errors.name ? "res-name-err" : undefined,
                                                    className: fieldCls
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 349,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                id: "res-phone",
                                                label: "Telefone",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 362,
                                                    columnNumber: 64
                                                }, this),
                                                error: errors.phone,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "res-phone",
                                                    type: "tel",
                                                    inputMode: "tel",
                                                    autoComplete: "tel-national",
                                                    placeholder: "Ex: 84 123 4567",
                                                    value: phone,
                                                    onChange: (e)=>setPhone(fmtPhone(e.target.value)),
                                                    "aria-invalid": !!errors.phone,
                                                    "aria-describedby": errors.phone ? "res-phone-err" : undefined,
                                                    className: fieldCls
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 363,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                id: "res-date",
                                                label: "Data",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 59
                                                }, this),
                                                error: errors.date,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "res-date",
                                                    type: "date",
                                                    min: clock.today || undefined,
                                                    value: date,
                                                    onChange: (e)=>setDate(e.target.value),
                                                    "aria-invalid": !!errors.date,
                                                    "aria-describedby": errors.date ? "res-date-err" : undefined,
                                                    className: `${fieldCls} [color-scheme:dark]`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 378,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 377,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                id: "res-time",
                                                label: "Horário",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 389,
                                                    columnNumber: 62
                                                }, this),
                                                error: errors.time,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectWrap, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "res-time",
                                                        value: time,
                                                        onChange: (e)=>setTime(e.target.value),
                                                        "aria-invalid": !!errors.time,
                                                        "aria-describedby": errors.time ? "res-time-err" : undefined,
                                                        className: `${fieldCls} appearance-none pr-9`,
                                                        children: [
                                                            !time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 399,
                                                                columnNumber: 35
                                                            }, this),
                                                            slots.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: s,
                                                                    disabled: slotDisabled(s),
                                                                    children: s
                                                                }, s, false, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 27
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 390,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                id: "res-people",
                                                label: "Nº de Pessoas",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 70
                                                }, this),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectWrap, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "res-people",
                                                        value: people,
                                                        onChange: (e)=>setPeople(Number(e.target.value)),
                                                        className: `${fieldCls} appearance-none pr-9`,
                                                        children: Array.from({
                                                            length: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPeople"]
                                                        }, (_, i)=>i + 1).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: n,
                                                                children: [
                                                                    n,
                                                                    " ",
                                                                    n === 1 ? "Pessoa" : "Pessoas"
                                                                ]
                                                            }, n, true, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 413,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                id: "res-table",
                                                label: "Escolha da Mesa",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableIcon, {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 421,
                                                    columnNumber: 71
                                                }, this),
                                                error: errors.table,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectWrap, {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        id: "res-table",
                                                        value: table ?? "",
                                                        onChange: (e)=>pick(Number(e.target.value)),
                                                        "aria-invalid": !!errors.table,
                                                        "aria-describedby": errors.table ? "res-table-err" : undefined,
                                                        className: `${fieldCls} appearance-none pr-9`,
                                                        children: [
                                                            table === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Sem mesas disponíveis"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 44
                                                            }, this),
                                                            [
                                                                "interior",
                                                                "explanada"
                                                            ].map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                                                                    label: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoneConfig"][z].name,
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tables"].filter((t)=>t.zone === z).slice().sort((a, b)=>a.id - b.id).map((t)=>{
                                                                        const st = statusOf(t.id);
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: t.id,
                                                                            disabled: st !== "available",
                                                                            children: [
                                                                                "Mesa ",
                                                                                t.id,
                                                                                st === "reserved" ? " — reservada" : st === "unavailable" ? " — indisponível" : ""
                                                                            ]
                                                                        }, t.id, true, {
                                                                            fileName: "[project]/components/Reservas.tsx",
                                                                            lineNumber: 441,
                                                                            columnNumber: 35
                                                                        }, this);
                                                                    })
                                                                }, z, false, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 27
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 423,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 421,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sm:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-1.5 flex flex-wrap items-center gap-2 text-[11px] font-medium text-cream",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gold-400",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                    className: "h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 456,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 455,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Pratos",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-normal text-cream/40",
                                                                children: "(opcional — escolha no menu)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 454,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-lg border border-gold-400/55 bg-ink-800/90 p-3",
                                                        children: [
                                                            dishes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-1.5",
                                                                children: dishes.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1.5 rounded-full border border-gold-400/50 bg-gold-400/15 py-1 pl-2.5 pr-1.5 text-[10.5px] text-gold-100",
                                                                        children: [
                                                                            name,
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                type: "button",
                                                                                onClick: ()=>removeDish(name),
                                                                                "aria-label": `Remover ${name}`,
                                                                                className: "grid h-4 w-4 place-items-center rounded-full text-gold-300 transition hover:bg-gold-400/25 hover:text-white",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                    className: "h-3 w-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                                    lineNumber: 478,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Reservas.tsx",
                                                                                lineNumber: 472,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, name, true, {
                                                                        fileName: "[project]/components/Reservas.tsx",
                                                                        lineNumber: 467,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 465,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] leading-relaxed text-cream/40",
                                                                children: "Ainda não escolheu pratos. Abra o menu e adicione os pratos que quiser."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setMenuOpen(true),
                                                                className: "btn btn-gold mt-3 w-full !py-2.5 !text-[10.5px]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Reservas.tsx",
                                                                        lineNumber: 494,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    dishes.length > 0 ? "Editar pratos no menu" : "Abrir menu e escolher pratos"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 flex justify-center sm:col-span-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn btn-fire !px-9 !py-4 !text-[12px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarCheck$3e$__["CalendarCheck"], {
                                                            className: "h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 502,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Confirmar reserva",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 504,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 501,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 500,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 348,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Reservas.tsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                delay: 0.08,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-[14px] border border-gold-400/70 bg-ink-900/85 p-4 backdrop-blur-sm sm:p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pinned$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinned$3e$__["MapPinned"], {
                                                            className: "h-8 w-8 text-gold-400",
                                                            strokeWidth: 1.6
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "h-display slant text-[22px] leading-none text-gold-400 sm:text-[26px]",
                                                                    children: "Mapa das mesas"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 519,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-hidden": true,
                                                                    className: "paint-r mt-1 block h-1.5 w-40 -rotate-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 520,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setPlansOpen(true),
                                                    className: "inline-flex items-center gap-1.5 rounded-full border border-gold-400/40 bg-ink-800/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-gold-300 transition hover:border-gold-400 hover:text-gold-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-300",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 528,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden sm:inline",
                                                            children: "Ver planta real"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 529,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sm:hidden",
                                                            children: "Planta real"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 523,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 515,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid items-start gap-3 sm:grid-cols-[1fr_auto]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TableMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    tables: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tables"],
                                                    statuses: statuses,
                                                    selected: selected,
                                                    onSelect: pick,
                                                    onZoneChange: setMapZone
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid gap-3 sm:w-[132px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "grid gap-2.5 rounded-[10px] border border-gold-400/30 bg-ink-800/80 p-3 text-[11px] text-cream sm:gap-3.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-4 w-4 shrink-0 rounded-full bg-gold-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Reservas.tsx",
                                                                            lineNumber: 546,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Mesa Disponível"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-4 w-4 shrink-0 rounded-full bg-flame-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Reservas.tsx",
                                                                            lineNumber: 549,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Mesa Reservada"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 548,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "h-4 w-4 shrink-0 rounded-full bg-zinc-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Reservas.tsx",
                                                                            lineNumber: 552,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        " Mesa Indisponível"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 551,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-[10px] border border-gold-400/30 bg-ink-800/80 p-2.5 text-center",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[13px] font-extrabold text-gold-400",
                                                                    children: selected ? `Mesa ${selected}` : "Sem mesa"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 556,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative mt-2 aspect-[4/3] overflow-hidden rounded-md border border-gold-400/30 sm:aspect-[1/1]",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                                        src: "/images/interior.webp",
                                                                        alt: selected ? `Ambiente junto à mesa ${selected}` : "Sala do restaurante",
                                                                        fill: true,
                                                                        sizes: "132px",
                                                                        className: "object-cover object-[62%_80%] photo-grade"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Reservas.tsx",
                                                                        lineNumber: 558,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/Reservas.tsx",
                                                                    lineNumber: 557,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 543,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Reservas.tsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 513,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    plansOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FloorPlanModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        initialZone: mapZone,
                        onClose: ()=>setPlansOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 574,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        delay: 0.1,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mx-auto mt-8 grid max-w-[1000px] items-center gap-6 text-center sm:grid-cols-3 sm:gap-0 sm:text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-center gap-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-gold-400 text-gold-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                    className: "h-7 w-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 581,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[12px] text-cream/90",
                                                        children: "Horário de Reservas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display text-[22px] leading-tight tracking-wide text-gold-400",
                                                        children: "10:00 — 22:00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 584,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 580,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-center gap-4 sm:border-x sm:border-cream/15 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-14 w-14 shrink-0 place-items-center rounded-full border-2 border-gold-400 text-gold-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableIcon, {
                                                    className: "h-7 w-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 590,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[14px] font-bold text-cream",
                                                        children: [
                                                            availableCount,
                                                            " ",
                                                            availableCount === 1 ? "Mesa Disponível" : "Mesas Disponíveis"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-cream/70",
                                                        children: "(Capacidade para várias pessoas)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 597,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center justify-center gap-4 sm:px-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-14 w-14 shrink-0 place-items-center text-gold-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$soup$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Soup$3e$__["Soup"], {
                                                    className: "h-10 w-10",
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 601,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "max-w-[230px] text-[12.5px] leading-snug text-cream/90",
                                                children: "Os pratos escolhidos serão preparados antes da sua chegada."
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 604,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 600,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 579,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 text-center text-[11px] text-cream/50",
                                children: [
                                    "Prefere reservar por telefone?",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["telHref"],
                                        className: "font-semibold text-gold-300 hover:text-gold-200",
                                        children: "84 672 4350"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 611,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 609,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 578,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 301,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[150] flex flex-col bg-ink-900/97 backdrop-blur-xl",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Menu do restaurante — escolher pratos para a reserva",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-gold-400/20 bg-ink-900/95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-x flex flex-wrap items-center justify-between gap-3 py-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-400/40 text-gold-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 629,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[9px] uppercase tracking-[0.3em] text-gold-400/80",
                                                        children: "Reserva de mesa"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 633,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "h-display text-[26px] leading-none text-cream sm:text-[30px]",
                                                        children: "Menu"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Reservas.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 632,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 628,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMenuOpen(false),
                                        className: "btn btn-ghost !px-5 !py-2.5 !text-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Reservas.tsx",
                                                lineNumber: 642,
                                                columnNumber: 17
                                            }, this),
                                            " Voltar ao formulário"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 637,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 627,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "container-x flex gap-2 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setMenuCat(c),
                                        className: `shrink-0 rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition ${menuCat === c ? "border-gold-400/70 bg-gold-400/15 text-gold-200" : "border-cream/12 text-cream/50 hover:border-cream/25 hover:text-cream/80"}`,
                                        children: c
                                    }, c, false, {
                                        fileName: "[project]/components/Reservas.tsx",
                                        lineNumber: 648,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Reservas.tsx",
                                lineNumber: 646,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 626,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto overscroll-contain",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-x py-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-3 sm:grid-cols-2",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuBook"][menuCat].map((l)=>{
                                        const on = dishes.includes(l.name);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `flex items-center gap-3 rounded-xl border p-3 transition ${on ? "border-gold-400/60 bg-gold-400/10" : "border-cream/10 bg-ink-800/60"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[12.5px] leading-snug text-cream",
                                                            children: l.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 25
                                                        }, this),
                                                        l.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-[9.5px] uppercase tracking-[0.14em] text-cream/35",
                                                            children: l.note
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 679,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 23
                                                }, this),
                                                l.price && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "shrink-0 font-display text-[12px] text-gold-300",
                                                    children: l.price
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 683,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>toggleDish(l.name),
                                                    "aria-pressed": on,
                                                    className: `inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.12em] transition ${on ? "border-gold-400 bg-gold-400 text-ink-900" : "border-gold-400/40 text-gold-300 hover:bg-gold-400/15"}`,
                                                    children: [
                                                        on ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 31
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 67
                                                        }, this),
                                                        on ? "Adicionado" : "Adicionar"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 685,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, l.name, true, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 670,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/Reservas.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 rounded-xl border border-cream/10 bg-ink-800/60 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-cream/70",
                                            children: "Não encontrou o prato que quer?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 704,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-col gap-2 sm:flex-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: customDish,
                                                    onChange: (e)=>setCustomDish(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter") {
                                                            e.preventDefault();
                                                            addCustomDish();
                                                        }
                                                    },
                                                    placeholder: "Escreva o nome do prato…",
                                                    "aria-label": "Adicionar outro prato que não está na lista",
                                                    className: `${fieldCls} flex-1`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 706,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: addCustomDish,
                                                    disabled: !customDish.trim(),
                                                    className: "inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-gold-400/60 bg-gold-400/10 px-4 text-[10.5px] font-bold uppercase tracking-[0.12em] text-gold-200 transition hover:bg-gold-400/20 disabled:cursor-not-allowed disabled:opacity-40",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                            className: "h-3.5 w-3.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 726,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Adicionar à reserva"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 705,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Reservas.tsx",
                                    lineNumber: 703,
                                    columnNumber: 15
                                }, this),
                                dishes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9.5px] uppercase tracking-[0.24em] text-gold-400/80",
                                            children: [
                                                "Selecionados (",
                                                dishes.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 733,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap gap-1.5",
                                            children: dishes.map((name)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 rounded-full border border-gold-400/50 bg-gold-400/15 py-1 pl-2.5 pr-1.5 text-[10.5px] text-gold-100",
                                                    children: [
                                                        name,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeDish(name),
                                                            "aria-label": `Remover ${name}`,
                                                            className: "grid h-4 w-4 place-items-center rounded-full text-gold-300 transition hover:bg-gold-400/25 hover:text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Reservas.tsx",
                                                                lineNumber: 749,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Reservas.tsx",
                                                            lineNumber: 743,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, name, true, {
                                                    fileName: "[project]/components/Reservas.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 736,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Reservas.tsx",
                                    lineNumber: 732,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Reservas.tsx",
                            lineNumber: 665,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 664,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gold-400/20 bg-ink-900/95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-x flex flex-wrap items-center justify-between gap-3 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-cream/60",
                                    children: dishes.length === 0 ? "Nenhum prato escolhido — pode decidir no local." : `${dishes.length} ${dishes.length === 1 ? "prato escolhido" : "pratos escolhidos"} para a reserva.`
                                }, void 0, false, {
                                    fileName: "[project]/components/Reservas.tsx",
                                    lineNumber: 761,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setMenuOpen(false),
                                    className: "btn btn-gold !px-6 !py-3 !text-[10.5px]",
                                    children: [
                                        "Voltar ao formulário ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Reservas.tsx",
                                            lineNumber: 771,
                                            columnNumber: 38
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Reservas.tsx",
                                    lineNumber: 766,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Reservas.tsx",
                            lineNumber: 760,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Reservas.tsx",
                        lineNumber: 759,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Reservas.tsx",
                lineNumber: 620,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Reservas.tsx",
        lineNumber: 290,
        columnNumber: 5
    }, this);
}
_s(Reservas, "9n+xeYPjETYJ9Y2Pz72MipXJgXU=");
_c3 = Reservas;
/** Agrupa os pratos escolhidos pelas categorias da carta. */ function groupDishes(selected) {
    const used = new Set();
    const groups = [];
    for (const cat of __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categories"]){
        const items = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menuBook"][cat].map((l)=>l.name).filter((name)=>!used.has(name) && selected.includes(name));
        items.forEach((name)=>used.add(name));
        if (items.length > 0) groups.push({
            cat,
            items
        });
    }
    const others = selected.filter((name)=>!used.has(name));
    if (others.length > 0) groups.push({
        cat: "Outros",
        items: others
    });
    return groups;
}
function waMessage(b) {
    const lines = [
        "Olá Piri Piri! Gostaria de reservar uma mesa.",
        "",
        `Nome: ${b.name}`,
        `Telefone: ${b.phone}`,
        `Data: ${fmtDate(b.date)}`,
        `Horário: ${b.time}`,
        `Pessoas: ${b.people}`,
        `Mesa: ${b.table}`
    ];
    const groups = groupDishes(b.dishes);
    if (groups.length === 0) {
        lines.push("Pratos: A decidir no local");
    } else {
        lines.push("Pratos:");
        for (const g of groups)lines.push(`• ${g.cat}: ${g.items.join(", ")}`);
    }
    lines.push("", "Aguardo a confirmação da reserva.");
    return lines.join("\n");
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TableIcon");
__turbopack_context__.k.register(_c1, "Field");
__turbopack_context__.k.register(_c2, "SelectWrap");
__turbopack_context__.k.register(_c3, "Reservas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, delay = 0, y = 34, className, once = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [shown, setShown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            if (typeof IntersectionObserver === "undefined") {
                setShown(true);
                return;
            }
            const io = new IntersectionObserver({
                "Reveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setShown(true);
                        if (once) io.disconnect();
                    } else if (!once) {
                        setShown(false);
                    }
                }
            }["Reveal.useEffect"], {
                rootMargin: "0px 0px -12% 0px",
                threshold: 0.01
            });
            io.observe(el);
            return ({
                "Reveal.useEffect": ()=>io.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], [
        once
    ]);
    const style = {
        "--reveal-y": `${y}px`,
        transitionDelay: `${delay}s`
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${shown ? "is-in" : ""} ${className ?? ""}`.trim(),
        style: style,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(Reveal, "ulyIE6ycWSg9Eyuc1w5Wg/OKYqg=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function SmoothScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SmoothScroll.useEffect": ()=>{
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
            let lenis = null;
            let raf = 0;
            let cancelled = false;
            const onClick = {
                "SmoothScroll.useEffect.onClick": (e)=>{
                    const a = e.target.closest('a[href^="#"]');
                    if (!a) return;
                    const id = a.getAttribute("href");
                    if (!id || id === "#") return;
                    const el = document.querySelector(id);
                    if (!el) return;
                    e.preventDefault();
                    if (lenis) {
                        lenis.scrollTo(el, {
                            offset: -90,
                            duration: 1.4
                        });
                    } else {
                        window.scrollTo({
                            top: el.getBoundingClientRect().top + window.scrollY - 80,
                            behavior: "smooth"
                        });
                    }
                }
            }["SmoothScroll.useEffect.onClick"];
            document.addEventListener("click", onClick);
            if (!isTouch) {
                __turbopack_context__.A("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript, async loader)").then({
                    "SmoothScroll.useEffect": ({ default: LenisCtor })=>{
                        if (cancelled) return;
                        lenis = new LenisCtor({
                            duration: 1.15,
                            easing: {
                                "SmoothScroll.useEffect": (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t))
                            }["SmoothScroll.useEffect"],
                            smoothWheel: true
                        });
                        const loop = {
                            "SmoothScroll.useEffect.loop": (time)=>{
                                lenis?.raf(time);
                                raf = requestAnimationFrame(loop);
                            }
                        }["SmoothScroll.useEffect.loop"];
                        raf = requestAnimationFrame(loop);
                    }
                }["SmoothScroll.useEffect"]);
            }
            return ({
                "SmoothScroll.useEffect": ()=>{
                    cancelled = true;
                    cancelAnimationFrame(raf);
                    document.removeEventListener("click", onClick);
                    lenis?.destroy();
                }
            })["SmoothScroll.useEffect"];
        }
    }["SmoothScroll.useEffect"], []);
    return null;
}
_s(SmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Specialties.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Specialties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drumstick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drumstick$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/drumstick.js [app-client] (ecmascript) <export default as Drumstick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/fish.js [app-client] (ecmascript) <export default as Fish>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils-crossed.js [app-client] (ecmascript) <export default as UtensilsCrossed>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cup$2d$soda$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CupSoda$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cup-soda.js [app-client] (ecmascript) <export default as CupSoda>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/menu.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const icons = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drumstick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Drumstick$3e$__["Drumstick"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__["Fish"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cup$2d$soda$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CupSoda$3e$__["CupSoda"]
];
function Specialties() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "especialidades",
        className: "relative overflow-hidden bg-ink-900 bg-texture bg-cover bg-center py-10 md:py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,3.1fr)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "slant font-script text-[44px] font-bold leading-none text-gold-400",
                            children: "Nossas"
                        }, void 0, false, {
                            fileName: "[project]/components/Specialties.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "h-display text-[13vw] leading-[0.95] text-cream sm:text-[9vw] lg:text-[44px]",
                            children: "Especialidades"
                        }, void 0, false, {
                            fileName: "[project]/components/Specialties.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 max-w-[260px] text-[13px] leading-relaxed text-cream/70",
                            children: "Pratos preparados com ingredientes frescos e muito amor."
                        }, void 0, false, {
                            fileName: "[project]/components/Specialties.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#menu",
                            className: "btn btn-ghost mt-5 !border-gold-400/60 !px-5 !py-2.5 !text-[10.5px] !text-gold-300",
                            children: [
                                "Ver Menu Completo ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/Specialties.tsx",
                                    lineNumber: 24,
                                    columnNumber: 31
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Specialties.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Specialties.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$menu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["specialties"].map((s, i)=>{
                        const Icon = icons[i] ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2d$crossed$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UtensilsCrossed$3e$__["UtensilsCrossed"];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0.07 * i,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: s.href,
                                className: "group relative block overflow-hidden rounded-[14px] border border-gold-400/25 bg-ink-900 shadow-card transition-transform duration-500 ease-out hover:-translate-y-2",
                                "data-cursor": "grow",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[4/4.3] overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                src: s.img,
                                                alt: s.title,
                                                fill: true,
                                                sizes: "(max-width: 768px) 45vw, 250px",
                                                className: "object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07]"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Specialties.tsx",
                                                lineNumber: 39,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Specialties.tsx",
                                                lineNumber: 46,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Specialties.tsx",
                                        lineNumber: 38,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative px-3.5 pb-4 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-[18px] left-3 grid h-9 w-9 place-items-center rounded-full bg-flame-500 shadow-[0_6px_18px_rgba(0,0,0,0.6)] ring-2 ring-ink-900",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-4 w-4 text-cream",
                                                    strokeWidth: 1.8
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Specialties.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Specialties.tsx",
                                                lineNumber: 49,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-[15px] uppercase leading-tight tracking-wide text-cream",
                                                children: s.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/Specialties.tsx",
                                                lineNumber: 52,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1.5 text-[11.5px] leading-snug text-cream/65",
                                                children: s.desc
                                            }, void 0, false, {
                                                fileName: "[project]/components/Specialties.tsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Specialties.tsx",
                                        lineNumber: 48,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Specialties.tsx",
                                lineNumber: 33,
                                columnNumber: 17
                            }, this)
                        }, s.title, false, {
                            fileName: "[project]/components/Specialties.tsx",
                            lineNumber: 32,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/Specialties.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Specialties.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Specialties.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Specialties;
var _c;
__turbopack_context__.k.register(_c, "Specialties");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TableMap3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TableMap3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/reservas.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const COLORS = {
    available: "#ffc61a",
    reserved: "#d4141c",
    unavailable: "#6b6b72"
};
const TEXT_COLORS = {
    available: "#1a1205",
    reserved: "#ffffff",
    unavailable: "#e8e8ea"
};
function TableMap3D({ tables, statuses, selected, onSelect, onZoneChange }) {
    _s();
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [zone, setZone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("interior");
    const [cam, setCam] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("persp");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [failed, setFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const zoneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(zone);
    const camRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(cam);
    const statusesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(statuses);
    const selectedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selected);
    const onSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onSelect);
    const onZoneChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onZoneChange);
    const paintRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "TableMap3D.useRef[paintRef]": ()=>{}
    }["TableMap3D.useRef[paintRef]"]);
    const flyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "TableMap3D.useRef[flyRef]": ()=>{}
    }["TableMap3D.useRef[flyRef]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableMap3D.useEffect": ()=>{
            onSelectRef.current = onSelect;
        }
    }["TableMap3D.useEffect"], [
        onSelect
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableMap3D.useEffect": ()=>{
            onZoneChangeRef.current = onZoneChange;
        }
    }["TableMap3D.useEffect"], [
        onZoneChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableMap3D.useEffect": ()=>{
            onZoneChangeRef.current?.(zone);
        }
    }["TableMap3D.useEffect"], [
        zone
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableMap3D.useEffect": ()=>{
            statusesRef.current = statuses;
            paintRef.current();
        }
    }["TableMap3D.useEffect"], [
        statuses
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableMap3D.useEffect": ()=>{
            selectedRef.current = selected;
            if (selected !== null) {
                const t = tables.find({
                    "TableMap3D.useEffect.t": (x)=>x.id === selected
                }["TableMap3D.useEffect.t"]);
                if (t && t.zone !== zoneRef.current) {
                    zoneRef.current = t.zone;
                    setZone(t.zone);
                    return;
                }
            }
            paintRef.current();
        }
    }["TableMap3D.useEffect"], [
        selected,
        tables
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableMap3D.useEffect": ()=>{
            zoneRef.current = zone;
            camRef.current = cam;
            flyRef.current(zone, cam);
            paintRef.current();
        }
    }["TableMap3D.useEffect"], [
        zone,
        cam
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TableMap3D.useEffect": ()=>{
            const stage = stageRef.current;
            if (!stage) return;
            let disposed = false;
            let started = false;
            let cleanup = null;
            let io = null;
            const init = {
                "TableMap3D.useEffect.init": async ()=>{
                    try {
                        const { THREE, OrbitControls } = await __turbopack_context__.A("[project]/lib/three-scene.ts [app-client] (ecmascript, async loader)");
                        if (disposed) return;
                        const canvas = canvasRef.current;
                        if (!canvas) return;
                        let dirty = true;
                        let hoverId = null;
                        let tween = null;
                        const renderer = new THREE.WebGLRenderer({
                            canvas,
                            antialias: true,
                            alpha: true
                        });
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
                        controls.addEventListener("change", {
                            "TableMap3D.useEffect.init": ()=>{
                                dirty = true;
                            }
                        }["TableMap3D.useEffect.init"]);
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
                        /* ---------- texturas ---------- */ const canvasTex = {
                            "TableMap3D.useEffect.init.canvasTex": (size, draw)=>{
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
                            }
                        }["TableMap3D.useEffect.init.canvasTex"];
                        const floorTex = {
                            "TableMap3D.useEffect.init.floorTex": (z, W, D)=>{
                                const t = canvasTex(256, {
                                    "TableMap3D.useEffect.init.floorTex.t": (g, s)=>{
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
                                    }
                                }["TableMap3D.useEffect.init.floorTex.t"]);
                                t.repeat.set(W / z.tile, D / z.tile);
                                return t;
                            }
                        }["TableMap3D.useEffect.init.floorTex"];
                        const ginghamTex = {
                            "TableMap3D.useEffect.init.ginghamTex": (w, d)=>{
                                const t = canvasTex(64, {
                                    "TableMap3D.useEffect.init.ginghamTex.t": (g, s)=>{
                                        g.fillStyle = "#ffffff";
                                        g.fillRect(0, 0, s, s);
                                        g.fillStyle = "rgba(229,35,73,0.62)";
                                        g.fillRect(0, 0, s / 2, s);
                                        g.fillRect(0, 0, s, s / 2);
                                    }
                                }["TableMap3D.useEffect.init.ginghamTex.t"]);
                                t.repeat.set(w / 0.25, d / 0.25);
                                return t;
                            }
                        }["TableMap3D.useEffect.init.ginghamTex"];
                        /* ---------- mobiliário ---------- */ const addChair = {
                            "TableMap3D.useEffect.init.addChair": (parent, x, z, rotY, mat)=>{
                                const g = new THREE.Group();
                                const seat = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.38), mat);
                                seat.position.y = 0.46;
                                const back = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.36, 0.05), mat);
                                back.position.set(0, 0.66, -0.165);
                                const leg = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.44, 0.06), mat);
                                leg.position.y = 0.22;
                                [
                                    seat,
                                    back,
                                    leg
                                ].forEach({
                                    "TableMap3D.useEffect.init.addChair": (m)=>{
                                        m.castShadow = true;
                                        g.add(m);
                                    }
                                }["TableMap3D.useEffect.init.addChair"]);
                                g.position.set(x, 0, z);
                                g.rotation.y = rotY;
                                parent.add(g);
                            }
                        }["TableMap3D.useEffect.init.addChair"];
                        const recs = new Map();
                        const pickables = [];
                        const byId = new Map(tables.map({
                            "TableMap3D.useEffect.init": (t)=>[
                                    t.id,
                                    t
                                ]
                        }["TableMap3D.useEffect.init"]));
                        const drawBadge = {
                            "TableMap3D.useEffect.init.drawBadge": (rec, status)=>{
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
                            }
                        }["TableMap3D.useEffect.init.drawBadge"];
                        const buildTable = {
                            "TableMap3D.useEffect.init.buildTable": (d)=>{
                                const z = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoneConfig"][d.zone];
                                const [w, dp] = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableDims"][d.shape];
                                const group = new THREE.Group();
                                group.position.set((d.x + w * 50 - z.w / 2) * __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"], 0, z.cz + (d.y + dp * 50 - z.h / 2) * __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"]);
                                scene.add(group);
                                const padMat = new THREE.MeshBasicMaterial({
                                    color: COLORS.available,
                                    transparent: true,
                                    opacity: 0.55,
                                    depthWrite: false
                                });
                                const pad = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.5, dp + 0.5), padMat);
                                pad.rotation.x = -Math.PI / 2;
                                pad.position.y = 0.02;
                                group.add(pad);
                                const selMat = new THREE.MeshBasicMaterial({
                                    color: 0xffd84d,
                                    transparent: true,
                                    opacity: 0.95,
                                    depthWrite: false
                                });
                                const sel = new THREE.Mesh(new THREE.PlaneGeometry(w + 0.9, dp + 0.9), selMat);
                                sel.rotation.x = -Math.PI / 2;
                                sel.position.y = 0.012;
                                sel.visible = false;
                                group.add(sel);
                                const gm = new THREE.MeshLambertMaterial({
                                    map: ginghamTex(w, dp)
                                });
                                const cloth = new THREE.MeshLambertMaterial({
                                    color: 0xf1e6e8
                                });
                                const top = new THREE.Mesh(new THREE.BoxGeometry(w, 0.05, dp), [
                                    cloth,
                                    cloth,
                                    gm,
                                    cloth,
                                    cloth,
                                    cloth
                                ]);
                                top.position.y = 0.8;
                                top.castShadow = true;
                                top.receiveShadow = true;
                                const skirt = new THREE.Mesh(new THREE.BoxGeometry(w * 0.97, 0.34, dp * 0.97), new THREE.MeshLambertMaterial({
                                    color: 0xc0392b
                                }));
                                skirt.position.y = 0.6;
                                skirt.castShadow = true;
                                const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.45, 12), new THREE.MeshLambertMaterial({
                                    color: 0x3a3a3a
                                }));
                                ped.position.y = 0.23;
                                top.userData.tid = d.id;
                                skirt.userData.tid = d.id;
                                group.add(top, skirt, ped);
                                pickables.push(top, skirt);
                                const chairMat = new THREE.MeshLambertMaterial({
                                    color: 0xf6f4f0
                                });
                                const cx = d.shape === "lg" ? 0.44 : 0;
                                const off = 0.3;
                                const hz = dp / 2 + off;
                                const hx = w / 2 + off;
                                if (d.shape === "lg") {
                                    [
                                        -cx,
                                        cx
                                    ].forEach({
                                        "TableMap3D.useEffect.init.buildTable": (x)=>{
                                            addChair(group, x, -hz, 0, chairMat);
                                            addChair(group, x, hz, Math.PI, chairMat);
                                        }
                                    }["TableMap3D.useEffect.init.buildTable"]);
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
                                const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
                                    map: badgeTex,
                                    transparent: true
                                }));
                                sprite.scale.set(0.62, 0.62, 1);
                                sprite.position.set(-w / 2 + 0.04, 1.2, -dp / 2 + 0.04);
                                group.add(sprite);
                                const rec = {
                                    id: d.id,
                                    padMat,
                                    sel,
                                    badgeCanvas,
                                    badgeTex
                                };
                                recs.set(d.id, rec);
                                drawBadge(rec, statusesRef.current[d.id] ?? "unavailable");
                            }
                        }["TableMap3D.useEffect.init.buildTable"];
                        /* ---------- pisos ---------- */ [
                            "interior",
                            "explanada"
                        ].forEach({
                            "TableMap3D.useEffect.init": (k)=>{
                                const z = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoneConfig"][k];
                                const W = z.w * __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"];
                                const D = z.h * __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"];
                                const side = new THREE.MeshLambertMaterial({
                                    color: 0x2a2f36
                                });
                                const topM = new THREE.MeshLambertMaterial({
                                    map: floorTex(z, W, D)
                                });
                                const slab = new THREE.Mesh(new THREE.BoxGeometry(W, 0.3, D), [
                                    side,
                                    side,
                                    topM,
                                    side,
                                    side,
                                    side
                                ]);
                                slab.position.set(0, -0.15, z.cz);
                                slab.receiveShadow = true;
                                scene.add(slab);
                            }
                        }["TableMap3D.useEffect.init"]);
                        tables.forEach(buildTable);
                        /* ---------- estado visual ---------- */ const paint = {
                            "TableMap3D.useEffect.init.paint": ()=>{
                                for (const t of tables){
                                    const rec = recs.get(t.id);
                                    if (!rec) continue;
                                    const st = statusesRef.current[t.id] ?? "unavailable";
                                    rec.padMat.color.set(COLORS[st]);
                                    rec.padMat.opacity = hoverId === t.id ? 0.9 : 0.55;
                                    rec.sel.visible = selectedRef.current === t.id;
                                    drawBadge(rec, st);
                                }
                                dirty = true;
                            }
                        }["TableMap3D.useEffect.init.paint"];
                        paintRef.current = paint;
                        /* ---------- câmara ---------- */ const preset = {
                            "TableMap3D.useEffect.init.preset": (zk, mode)=>{
                                const z = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoneConfig"][zk];
                                const target = new THREE.Vector3(0, 0, z.cz);
                                const asp = Math.max(0.4, stage.clientWidth / Math.max(1, stage.clientHeight));
                                const f = Math.max(1, 1.6 / asp);
                                const off = mode === "top" ? new THREE.Vector3(0, z.top * f, 0.01) : new THREE.Vector3(0, z.persp[0] * f, z.persp[1] * f);
                                return {
                                    pos: target.clone().add(off),
                                    target
                                };
                            }
                        }["TableMap3D.useEffect.init.preset"];
                        const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
                        const flyTo = {
                            "TableMap3D.useEffect.init.flyTo": (zk, mode)=>{
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
                                    g1: p.target
                                };
                            }
                        }["TableMap3D.useEffect.init.flyTo"];
                        flyRef.current = flyTo;
                        const stepTween = {
                            "TableMap3D.useEffect.init.stepTween": ()=>{
                                if (!tween) return;
                                const k = Math.min(1, (performance.now() - tween.t0) / tween.dur);
                                const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
                                camera.position.lerpVectors(tween.p0, tween.p1, e);
                                controls.target.lerpVectors(tween.g0, tween.g1, e);
                                controls.update();
                                dirty = true;
                                if (k >= 1) tween = null;
                            }
                        }["TableMap3D.useEffect.init.stepTween"];
                        /* ---------- picking ---------- */ const raycaster = new THREE.Raycaster();
                        const pointer = new THREE.Vector2();
                        const hit = {
                            "TableMap3D.useEffect.init.hit": (clientX, clientY)=>{
                                const r = canvas.getBoundingClientRect();
                                pointer.set((clientX - r.left) / r.width * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
                                raycaster.setFromCamera(pointer, camera);
                                const h = raycaster.intersectObjects(pickables, false)[0];
                                return h ? h.object.userData.tid : null;
                            }
                        }["TableMap3D.useEffect.init.hit"];
                        let down = null;
                        const onDown = {
                            "TableMap3D.useEffect.init.onDown": (e)=>{
                                down = {
                                    x: e.clientX,
                                    y: e.clientY,
                                    t: performance.now()
                                };
                            }
                        }["TableMap3D.useEffect.init.onDown"];
                        const onUp = {
                            "TableMap3D.useEffect.init.onUp": (e)=>{
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
                            }
                        }["TableMap3D.useEffect.init.onUp"];
                        const onMove = {
                            "TableMap3D.useEffect.init.onMove": (e)=>{
                                if (e.buttons) return;
                                const id = hit(e.clientX, e.clientY);
                                const st = id === null ? null : statusesRef.current[id] ?? "unavailable";
                                canvas.style.cursor = id !== null && st === "available" ? "pointer" : "";
                                if (id !== hoverId) {
                                    hoverId = id;
                                    paint();
                                }
                            }
                        }["TableMap3D.useEffect.init.onMove"];
                        const onLeave = {
                            "TableMap3D.useEffect.init.onLeave": ()=>{
                                if (hoverId !== null) {
                                    hoverId = null;
                                    paint();
                                }
                            }
                        }["TableMap3D.useEffect.init.onLeave"];
                        canvas.addEventListener("pointerdown", onDown);
                        canvas.addEventListener("pointerup", onUp);
                        canvas.addEventListener("pointermove", onMove);
                        canvas.addEventListener("pointerleave", onLeave);
                        /* ---------- redimensionamento ---------- */ const resize = {
                            "TableMap3D.useEffect.init.resize": ()=>{
                                const w = stage.clientWidth;
                                const h = stage.clientHeight;
                                if (!w || !h) return;
                                renderer.setSize(w, h, false);
                                camera.aspect = w / h;
                                camera.updateProjectionMatrix();
                                dirty = true;
                            }
                        }["TableMap3D.useEffect.init.resize"];
                        const ro = new ResizeObserver(resize);
                        ro.observe(stage);
                        resize();
                        const p = preset(zoneRef.current, camRef.current);
                        camera.position.copy(p.pos);
                        controls.target.copy(p.target);
                        controls.update();
                        /* ---------- loop ---------- */ let raf = 0;
                        const frame = {
                            "TableMap3D.useEffect.init.frame": ()=>{
                                raf = requestAnimationFrame(frame);
                                stepTween();
                                if (dirty) {
                                    renderer.render(scene, camera);
                                    dirty = false;
                                }
                            }
                        }["TableMap3D.useEffect.init.frame"];
                        raf = requestAnimationFrame(frame);
                        paint();
                        setReady(true);
                        const disposeMaterial = {
                            "TableMap3D.useEffect.init.disposeMaterial": (m)=>{
                                const withMap = m;
                                withMap.map?.dispose();
                                m.dispose();
                            }
                        }["TableMap3D.useEffect.init.disposeMaterial"];
                        cleanup = ({
                            "TableMap3D.useEffect.init": ()=>{
                                cancelAnimationFrame(raf);
                                ro.disconnect();
                                canvas.removeEventListener("pointerdown", onDown);
                                canvas.removeEventListener("pointerup", onUp);
                                canvas.removeEventListener("pointermove", onMove);
                                canvas.removeEventListener("pointerleave", onLeave);
                                controls.dispose();
                                scene.traverse({
                                    "TableMap3D.useEffect.init": (obj)=>{
                                        const mesh = obj;
                                        if (mesh.geometry) mesh.geometry.dispose();
                                        const mat = mesh.material;
                                        if (Array.isArray(mat)) mat.forEach(disposeMaterial);
                                        else if (mat) disposeMaterial(mat);
                                    }
                                }["TableMap3D.useEffect.init"]);
                                renderer.dispose();
                                paintRef.current = ({
                                    "TableMap3D.useEffect.init": ()=>{}
                                })["TableMap3D.useEffect.init"];
                                flyRef.current = ({
                                    "TableMap3D.useEffect.init": ()=>{}
                                })["TableMap3D.useEffect.init"];
                            }
                        })["TableMap3D.useEffect.init"];
                    } catch  {
                        if (!disposed) setFailed(true);
                    }
                }
            }["TableMap3D.useEffect.init"];
            const start = {
                "TableMap3D.useEffect.start": ()=>{
                    if (started || disposed) return;
                    started = true;
                    void init();
                }
            }["TableMap3D.useEffect.start"];
            if (typeof IntersectionObserver === "undefined") {
                start();
            } else {
                io = new IntersectionObserver({
                    "TableMap3D.useEffect": (entries)=>{
                        if (entries.some({
                            "TableMap3D.useEffect": (e)=>e.isIntersecting
                        }["TableMap3D.useEffect"])) {
                            io?.disconnect();
                            io = null;
                            start();
                        }
                    }
                }["TableMap3D.useEffect"], {
                    rootMargin: "300px"
                });
                io.observe(stage);
            }
            return ({
                "TableMap3D.useEffect": ()=>{
                    disposed = true;
                    io?.disconnect();
                    cleanup?.();
                }
            })["TableMap3D.useEffect"];
        }
    }["TableMap3D.useEffect"], [
        tables
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: stageRef,
        className: "relative h-[340px] overflow-hidden rounded-[8px] border border-gold-400/40 bg-ink-800/70 sm:h-[380px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "block h-full w-full touch-none",
                "aria-label": "Mapa 3D interativo das mesas do restaurante"
            }, void 0, false, {
                fileName: "[project]/components/TableMap3D.tsx",
                lineNumber: 600,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-2 top-2 flex rounded-full border border-cream/15 bg-ink-900/80 p-0.5 backdrop-blur",
                children: [
                    "interior",
                    "explanada"
                ].map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setZone(z),
                        "aria-pressed": zone === z,
                        className: `rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] transition ${zone === z ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoneConfig"][z].name
                    }, z, false, {
                        fileName: "[project]/components/TableMap3D.tsx",
                        lineNumber: 609,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/TableMap3D.tsx",
                lineNumber: 607,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-2 top-2 flex rounded-full border border-cream/15 bg-ink-900/80 p-0.5 backdrop-blur",
                children: [
                    [
                        "persp",
                        "3D"
                    ],
                    [
                        "top",
                        "Topo"
                    ]
                ].map(([m, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setCam(m),
                        "aria-pressed": cam === m,
                        className: `rounded-full px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] transition ${cam === m ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"}`,
                        children: label
                    }, m, false, {
                        fileName: "[project]/components/TableMap3D.tsx",
                        lineNumber: 631,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/TableMap3D.tsx",
                lineNumber: 624,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "pointer-events-none absolute inset-x-2 bottom-2 rounded-md bg-ink-900/80 px-2 py-1.5 text-center text-[9px] leading-tight text-cream/55",
                children: "Arraste para rodar · pinça/roda para aproximar · toque numa mesa"
            }, void 0, false, {
                fileName: "[project]/components/TableMap3D.tsx",
                lineNumber: 645,
                columnNumber: 7
            }, this),
            !ready && !failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 grid place-items-center bg-ink-900/85",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] uppercase tracking-[0.26em] text-cream/50",
                    children: "A carregar mapa 3D…"
                }, void 0, false, {
                    fileName: "[project]/components/TableMap3D.tsx",
                    lineNumber: 651,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TableMap3D.tsx",
                lineNumber: 650,
                columnNumber: 9
            }, this),
            failed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-auto bg-ink-900/95 p-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-2 text-[9px] uppercase tracking-[0.18em] text-cream/45",
                        children: "Mapa 3D indisponível — escolha a mesa na lista:"
                    }, void 0, false, {
                        fileName: "[project]/components/TableMap3D.tsx",
                        lineNumber: 659,
                        columnNumber: 11
                    }, this),
                    [
                        "interior",
                        "explanada"
                    ].map((z)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 last:mb-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-1 text-[9px] uppercase tracking-[0.18em] text-gold-400/80",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$reservas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zoneConfig"][z].name
                                }, void 0, false, {
                                    fileName: "[project]/components/TableMap3D.tsx",
                                    lineNumber: 664,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-6 gap-1",
                                    children: tables.filter((t)=>t.zone === z).slice().sort((a, b)=>a.id - b.id).map((t)=>{
                                        const st = statuses[t.id] ?? "unavailable";
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            disabled: st !== "available",
                                            onClick: ()=>onSelect(t.id),
                                            "aria-pressed": selected === t.id,
                                            className: `rounded border py-1 text-[10px] font-bold transition ${selected === t.id ? "border-gold-300 bg-gold-400/25 text-gold-200" : st === "available" ? "border-cream/20 text-cream/75 hover:border-gold-400/50" : st === "reserved" ? "cursor-not-allowed border-flame-500/50 text-flame-300/70" : "cursor-not-allowed border-cream/10 text-cream/25"}`,
                                            children: t.id
                                        }, t.id, false, {
                                            fileName: "[project]/components/TableMap3D.tsx",
                                            lineNumber: 675,
                                            columnNumber: 23
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/TableMap3D.tsx",
                                    lineNumber: 667,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, z, true, {
                            fileName: "[project]/components/TableMap3D.tsx",
                            lineNumber: 663,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/TableMap3D.tsx",
                lineNumber: 658,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TableMap3D.tsx",
        lineNumber: 596,
        columnNumber: 5
    }, this);
}
_s(TableMap3D, "zF/zVCpzrmtKw2hiJ9MohIhB2us=");
_c = TableMap3D;
var _c;
__turbopack_context__.k.register(_c, "TableMap3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyUs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chef-hat.js [app-client] (ecmascript) <export default as ChefHat>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Reveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Delivery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Delivery.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const items = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"],
        title: "Receitas Tradicionais",
        desc: "O verdadeiro sabor de sempre."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
        title: "Qualidade Garantida",
        desc: "Ingredientes frescos e selecionados."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chef$2d$hat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChefHat$3e$__["ChefHat"],
        title: "Décadas de Experiência",
        desc: "Tradição que se sente em cada prato."
    }
];
function WhyUs() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden border-y border-cream/10 bg-ink-900 bg-red-strokes bg-cover bg-center py-9 md:py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-x relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_2.2fr_1.35fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "slant font-script text-[34px] font-bold leading-[0.95] text-cream",
                        children: [
                            "Porque escolher",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/WhyUs.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-flame-400",
                                children: "o Piri Piri?"
                            }, void 0, false, {
                                fileName: "[project]/components/WhyUs.tsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyUs.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyUs.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-cream/10",
                    children: items.map((it, i)=>{
                        const Icon = it.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            delay: 0.06 * i,
                            className: "text-center sm:px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-gold-400 bg-ink-900",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-6 w-6 text-gold-400",
                                        strokeWidth: 1.6
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyUs.tsx",
                                        lineNumber: 31,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyUs.tsx",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-3 font-display text-[14px] uppercase tracking-wide text-cream",
                                    children: it.title
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyUs.tsx",
                                    lineNumber: 33,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-[11.5px] leading-snug text-cream/60",
                                    children: it.desc
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyUs.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, it.title, true, {
                            fileName: "[project]/components/WhyUs.tsx",
                            lineNumber: 29,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/WhyUs.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Delivery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/components/WhyUs.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyUs.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyUs.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/WhyUs.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = WhyUs;
var _c;
__turbopack_context__.k.register(_c, "WhyUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/useMenuLang.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangSwitch",
    ()=>LangSwitch,
    "useMenuLang",
    ()=>useMenuLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const KEY = "pp-menu-lang";
function useMenuLang() {
    _s();
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("pt");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMenuLang.useEffect": ()=>{
            try {
                const v = localStorage.getItem(KEY);
                if (v === "en" || v === "pt") setLangState(v);
            } catch  {}
            const onChange = {
                "useMenuLang.useEffect.onChange": (e)=>setLangState(e.detail)
            }["useMenuLang.useEffect.onChange"];
            window.addEventListener("pp-lang", onChange);
            return ({
                "useMenuLang.useEffect": ()=>window.removeEventListener("pp-lang", onChange)
            })["useMenuLang.useEffect"];
        }
    }["useMenuLang.useEffect"], []);
    const setLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useMenuLang.useCallback[setLang]": (l)=>{
            setLangState(l);
            try {
                localStorage.setItem(KEY, l);
            } catch  {}
            window.dispatchEvent(new CustomEvent("pp-lang", {
                detail: l
            }));
        }
    }["useMenuLang.useCallback[setLang]"], []);
    return [
        lang,
        setLang
    ];
}
_s(useMenuLang, "ZfNL6PbU3w26OiFpDFkQG1GSP8s=");
function LangSwitch({ lang, setLang }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": "Language / Idioma",
        className: "inline-flex items-center rounded-full border border-gold-400/40 bg-ink-900/70 p-0.5 text-[10.5px] font-bold uppercase tracking-[0.18em]",
        children: [
            "pt",
            "en"
        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setLang(l),
                "aria-pressed": lang === l,
                className: `rounded-full px-3 py-1.5 transition-colors ${lang === l ? "bg-gold-400 text-ink-900" : "text-cream/60 hover:text-cream"}`,
                children: l === "pt" ? "PT" : "EN"
            }, l, false, {
                fileName: "[project]/components/useMenuLang.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/useMenuLang.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = LangSwitch;
var _c;
__turbopack_context__.k.register(_c, "LangSwitch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "facts",
    ()=>facts,
    "reviews",
    ()=>reviews
]);
const reviews = [
    {
        quote: "Um endereço típico de Maputo. Este restaurante parece existir desde sempre e pouco mudou desde a sua inauguração. Uma clientela eclética, um prato do dia com preço bastante razoável, um cardápio variado e serviço profissional. Um bom lugar para uma refeição rápida e barata.",
        author: "M S",
        meta: "Guia local · 99 críticas · 5 fotos",
        when: "há 2 semanas",
        stars: 5
    },
    {
        quote: "Delicious food, and despite the basic restaurant environment we enjoyed it.",
        author: "Atualização de visitante",
        meta: "Google Maps",
        when: "há 2 anos",
        stars: 5
    }
];
const facts = {
    name: "Restaurante Píri Píri",
    street: "Av. 24 de Julho, Maputo",
    plusCode: "2HFV+84 Maputo",
    phone: "84 672 4350",
    phoneAlt: "84 672 4350",
    rating: "4,0",
    reviews: "1 341",
    pricePerson: "800 – 1 400 MZN",
    closes: "Fecha às 02:00",
    services: [
        "Comer no local",
        "Take away"
    ],
    tags: [
        "capsicum frutescens 'piri piri' 35",
        "grelhado 22",
        "prego 9",
        "vila 9"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/menu-en.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryEn",
    ()=>categoryEn,
    "en",
    ()=>en,
    "tr",
    ()=>tr,
    "ui",
    ()=>ui
]);
const categoryEn = {
    Carnes: "Meats",
    "Peixe & Marisco": "Fish & Seafood",
    Entradas: "Starters",
    Acompanhamentos: "Sides",
    Sobremesas: "Desserts",
    Bebidas: "Drinks"
};
const en = {
    // pratos
    "Frango à Píri-píri": "Piri-piri Chicken",
    "Frango à Píri-píri · Meio": "Piri-piri Chicken · Half",
    "O prato da casa. Frango marinado no nosso piri-piri, grelhado lentamente sobre brasa viva até ficar dourado e suculento.": "The house special. Chicken marinated in our piri-piri, slowly grilled over live embers until golden and juicy.",
    "Meio frango na brasa, com batata frita, salada de cebola e limão. A dose de quem não quer partilhar.": "Half a charcoal-grilled chicken with fries, onion salad and lemon. For those who don't want to share.",
    "Prego no Prato": "Steak on a Plate (Prego)",
    "Bife de vaca grelhado no carvão, servido com batata frita, arroz e ovo. O clássico de Maputo, feito como sempre foi.": "Charcoal-grilled beef steak served with fries, rice and egg. The Maputo classic, made the way it's always been.",
    "Prego no Pão": "Steak Sandwich (Prego)",
    "Bife grelhado dentro do pão, alho, piri-piri e batata frita. Simples, rápido, memorável.": "Grilled steak in a bread roll with garlic, piri-piri and fries. Simple, quick, memorable.",
    "Moelas Estufadas": "Stewed Gizzards",
    "Moelas cozinhadas devagar no nosso molho, com pão para acompanhar.": "Gizzards slow-cooked in our sauce, served with bread.",
    "Camarão Grelhado": "Grilled Prawns",
    "Camarão médio e tigre na brasa, alho, limão e um fio de azeite. Servido com batata frita e salada.": "Medium and tiger prawns grilled over embers with garlic, lemon and a drizzle of olive oil. Served with fries and salad.",
    "Caril de Camarão": "Prawn Curry",
    "Camarão cozido lentamente em caril aromático da casa, para molhar o pão até ao fim.": "Prawns slowly cooked in our aromatic house curry, perfect for dipping bread.",
    "Lulas Grelhadas": "Grilled Squid",
    "Lulas tenras na grelha, alho e limão, com arroz e legumes salteados.": "Tender grilled squid with garlic and lemon, served with rice and sautéed vegetables.",
    "Peixe Vermelho": "Red Fish",
    "Peixe vermelho fresco do dia, grelhado inteiro na brasa, com limão e salada.": "Fresh red fish of the day, grilled whole over embers, with lemon and salad.",
    "Peixe Grelhado com Legumes": "Grilled Fish with Vegetables",
    "Filete grelhado com legumes salteados — leve, fresco e cheio de sabor a carvão.": "Grilled fillet with sautéed vegetables — light, fresh and full of charcoal flavour.",
    "Camarão Alhinho": "Garlic Prawns",
    "Camarão salteado em alho e azeite, a fumegar na travessa.": "Prawns sautéed in garlic and olive oil, served sizzling on the dish.",
    "Rissóis e Empadas": "Rissoles & Pies",
    "Rissóis e empadas de carne e peixe, fritos na hora.": "Meat and fish rissoles and pies, fried to order.",
    "Azeitonas Marinadas": "Marinated Olives",
    "Azeitonas marinadas na casa — o início perfeito antes da brasa.": "House-marinated olives — the perfect start before the grill.",
    "Batata Frita": "French Fries",
    "Batata dourada, crocante por fora — o acompanhamento de sempre.": "Golden potatoes, crispy outside — the classic side.",
    "Batatas Salteadas": "Sautéed Potatoes",
    "Batatas pequenas salteadas em manteiga e ervas.": "Baby potatoes sautéed in butter and herbs.",
    "Sorvete Servido na Taça": "Ice Cream in a Cup",
    "Gelado cremoso servido na taça clássica, para fechar a refeição.": "Creamy ice cream served in a classic cup to finish the meal.",
    Expresso: "Espresso",
    "Café expresso curto, bem tirado — a assinatura do fim da refeição.": "A short, well-pulled espresso — the signature end to a meal.",
    "Heineken Draft 250ml": "Heineken Draft 250ml",
    "Cerveja gelada de pressão, servida no copo alto.": "Ice-cold draught beer served in a tall glass.",
    "Draft Beer": "Draft Beer",
    "Imperial bem gelada, para acompanhar o frango na brasa.": "Ice-cold draught, made for grilled chicken.",
    // novos pratos (fotos novas)
    "Bife Panado com Ovo": "Breaded Steak with Egg",
    "Bife panado e estaladiço com ovo estrelado e batata frita dourada.": "Crispy breaded steak topped with a fried egg, served with golden fries.",
    "Caril de Frango": "Chicken Curry",
    "Frango no molho de caril da casa, servido com arroz branco.": "Chicken in our house curry sauce, served with white rice.",
    "Arroz de Marisco": "Seafood Rice",
    "Arroz cozinhado com camarão e marisco, finalizado com ervas frescas.": "Rice cooked with prawns and seafood, finished with fresh herbs.",
    Cocktails: "Cocktails",
    "Cocktails frutados servidos bem frios ao balcão.": "Fruity cocktails served ice cold at the bar.",
    "Piña Colada": "Piña Colada",
    "Cremosa, gelada e decorada com ananás.": "Creamy, ice-cold and garnished with pineapple.",
    Sangria: "Sangria",
    "Sangria fresca com fruta, servida no copo e no jarro de barro.": "Fresh fruit sangria, served by the glass and in a clay jug.",
    // selos / notas
    Inteiro: "Whole",
    Meio: "Half",
    "Prato do dia": "Dish of the day",
    "Take away": "Take away",
    "1/2 dose · dose": "Half portion · portion",
    "Fritas · Grelhadas": "Fried · Grilled",
    "Inteiro · Meio": "Whole · Half",
    "com batata, arroz e ovo": "with fries, rice and egg",
    "Preço sob consulta": "Price on request",
    consultar: "ask",
    // carta
    "Camarão Tigre Grelhado": "Grilled Tiger Prawns",
    "Camarão Cozido": "Boiled Prawns",
    "Lulas Grelhadas ou Fritas": "Grilled or Fried Squid",
    "Filete de Peixe Panado / Grelhado": "Breaded / Grilled Fish Fillet",
    "Espetada de Marisco": "Seafood Skewer",
    "Bacalhau Cozido / Assado": "Boiled / Roasted Cod",
    "Azeitonas Simples": "Plain Olives",
    "Rissóis de Camarão": "Prawn Rissoles",
    "Chamussas de Camarão": "Prawn Samosas",
    "Chamussas de Carne": "Meat Samosas",
    "Sopa do Dia": "Soup of the Day",
    "Pão de Alho": "Garlic Bread",
    Arroz: "Rice",
    Salada: "Salad",
    "Legumes Salteados": "Sautéed Vegetables",
    "Doce do Dia": "Dessert of the Day",
    Refrigerantes: "Soft Drinks",
    Águas: "Water"
};
const ui = {
    pt: {
        kicker: "Menu em",
        title: "Destaque",
        sub: "Os nossos pratos mais pedidos pelos clientes.",
        order: "Pedir Agora",
        book: "Carta",
        bilingual: "Menu bilingue PT / EN",
        note: "Preços retirados do menu impresso da casa. Pratos e disponibilidade podem variar — confirme por telefone antes de encomendar.",
        avg: "Preço médio por pessoa",
        dayDish: "Prato do dia disponível.",
        orderBtn: "Encomendar",
        photos: "Ver fotografias",
        full: "Ver menu completo",
        prev: "Pratos anteriores",
        next: "Pratos seguintes",
        back: "Voltar ao site",
        pageTitle: "Menu completo",
        pageSub: "Carta completa do Restaurante Píri Píri.",
        toggle: "Traduzir para inglês"
    },
    en: {
        kicker: "Featured",
        title: "Menu",
        sub: "Our customers' most-ordered dishes.",
        order: "Order Now",
        book: "Menu",
        bilingual: "Bilingual menu PT / EN",
        note: "Prices taken from the restaurant's printed menu. Dishes and availability may vary — please confirm by phone before ordering.",
        avg: "Average price per person",
        dayDish: "Dish of the day available.",
        orderBtn: "Order",
        photos: "See photos",
        full: "View full menu",
        prev: "Previous dishes",
        next: "Next dishes",
        back: "Back to site",
        pageTitle: "Full menu",
        pageSub: "The complete Píri Píri Restaurant menu.",
        toggle: "Translate to English"
    }
};
const tr = (lang, s)=>lang === "en" ? en[s] ?? s : s;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/menu.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categories",
    ()=>categories,
    "dishes",
    ()=>dishes,
    "gallery",
    ()=>gallery,
    "menuBook",
    ()=>menuBook,
    "specialties",
    ()=>specialties
]);
const categories = [
    "Carnes",
    "Peixe & Marisco",
    "Entradas",
    "Acompanhamentos",
    "Sobremesas",
    "Bebidas"
];
const dishes = [
    {
        name: "Frango à Píri-píri",
        desc: "O prato da casa. Frango marinado no nosso piri-piri, grelhado lentamente sobre brasa viva até ficar dourado e suculento.",
        img: "/images/fotos/frango-inteiro.webp",
        badge: "Inteiro",
        cat: "Carnes"
    },
    {
        name: "Frango à Píri-píri · Meio",
        desc: "Meio frango na brasa, com batata frita, salada de cebola e limão. A dose de quem não quer partilhar.",
        img: "/images/p37.webp",
        badge: "Meio",
        cat: "Carnes"
    },
    {
        name: "Prego no Prato",
        desc: "Bife de vaca grelhado no carvão, servido com batata frita, arroz e ovo. O clássico de Maputo, feito como sempre foi.",
        img: "/images/p03.webp",
        badge: "Prato do dia",
        cat: "Carnes"
    },
    {
        name: "Prego no Pão",
        desc: "Bife grelhado dentro do pão, alho, piri-piri e batata frita. Simples, rápido, memorável.",
        img: "/images/p08.webp",
        badge: "Take away",
        cat: "Carnes"
    },
    {
        name: "Bife Panado com Ovo",
        desc: "Bife panado e estaladiço com ovo estrelado e batata frita dourada.",
        img: "/images/fotos/bife-panado.webp",
        cat: "Carnes"
    },
    {
        name: "Caril de Frango",
        desc: "Frango no molho de caril da casa, servido com arroz branco.",
        img: "/images/fotos/caril-frango.webp",
        pos: "50% 55%",
        cat: "Carnes"
    },
    {
        name: "Moelas Estufadas",
        desc: "Moelas cozinhadas devagar no nosso molho, com pão para acompanhar.",
        img: "/images/p46.webp",
        price: "265,00 MT",
        cat: "Carnes"
    },
    {
        name: "Camarão Grelhado",
        desc: "Camarão médio e tigre na brasa, alho, limão e um fio de azeite. Servido com batata frita e salada.",
        img: "/images/fotos/camarao-grelhado.webp",
        badge: "1/2 dose · dose",
        cat: "Peixe & Marisco"
    },
    {
        name: "Caril de Camarão",
        desc: "Camarão cozido lentamente em caril aromático da casa, para molhar o pão até ao fim.",
        img: "/images/p06.webp",
        cat: "Peixe & Marisco"
    },
    {
        name: "Arroz de Marisco",
        desc: "Arroz cozinhado com camarão e marisco, finalizado com ervas frescas.",
        img: "/images/fotos/arroz-marisco.webp",
        cat: "Peixe & Marisco"
    },
    {
        name: "Lulas Grelhadas",
        desc: "Lulas tenras na grelha, alho e limão, com arroz e legumes salteados.",
        img: "/images/p09.webp",
        badge: "Fritas · Grelhadas",
        cat: "Peixe & Marisco"
    },
    {
        name: "Peixe Vermelho",
        desc: "Peixe vermelho fresco do dia, grelhado inteiro na brasa, com limão e salada.",
        img: "/images/p10.webp",
        cat: "Peixe & Marisco"
    },
    {
        name: "Peixe Grelhado com Legumes",
        desc: "Filete grelhado com legumes salteados — leve, fresco e cheio de sabor a carvão.",
        img: "/images/fotos/peixe-legumes.webp",
        cat: "Peixe & Marisco"
    },
    {
        name: "Camarão Alhinho",
        desc: "Camarão salteado em alho e azeite, a fumegar na travessa.",
        img: "/images/p04.webp",
        price: "650,00 MT",
        cat: "Entradas"
    },
    {
        name: "Rissóis e Empadas",
        desc: "Rissóis e empadas de carne e peixe, fritos na hora.",
        img: "/images/p07.webp",
        price: "245,00 MT",
        cat: "Entradas"
    },
    {
        name: "Azeitonas Marinadas",
        desc: "Azeitonas marinadas na casa — o início perfeito antes da brasa.",
        img: "/images/p40.webp",
        price: "250,00 MT",
        cat: "Entradas"
    },
    {
        name: "Batata Frita",
        desc: "Batata dourada, crocante por fora — o acompanhamento de sempre.",
        img: "/images/p50.webp",
        price: "85,00 MT",
        cat: "Acompanhamentos"
    },
    {
        name: "Batatas Salteadas",
        desc: "Batatas pequenas salteadas em manteiga e ervas.",
        img: "/images/p56.webp",
        cat: "Acompanhamentos"
    },
    {
        name: "Sorvete Servido na Taça",
        desc: "Gelado cremoso servido na taça clássica, para fechar a refeição.",
        img: "/images/p47.webp",
        cat: "Sobremesas"
    },
    {
        name: "Expresso",
        desc: "Café expresso curto, bem tirado — a assinatura do fim da refeição.",
        img: "/images/fotos/expresso-pastel.webp",
        pos: "50% 70%",
        cat: "Bebidas"
    },
    {
        name: "Heineken Draft 250ml",
        desc: "Cerveja gelada de pressão, servida no copo alto.",
        img: "/images/p53.webp",
        cat: "Bebidas"
    },
    {
        name: "Draft Beer",
        desc: "Imperial bem gelada, para acompanhar o frango na brasa.",
        img: "/images/fotos/cerveja-draft.webp",
        pos: "50% 15%",
        cat: "Bebidas"
    },
    {
        name: "Cocktails",
        desc: "Cocktails frutados servidos bem frios ao balcão.",
        img: "/images/fotos/cocktails.webp",
        pos: "50% 65%",
        cat: "Bebidas"
    },
    {
        name: "Piña Colada",
        desc: "Cremosa, gelada e decorada com ananás.",
        img: "/images/fotos/pina-colada.webp",
        pos: "50% 60%",
        cat: "Bebidas"
    },
    {
        name: "Sangria",
        desc: "Sangria fresca com fruta, servida no copo e no jarro de barro.",
        img: "/images/fotos/sangria.webp",
        cat: "Bebidas"
    }
];
const menuBook = {
    Carnes: [
        {
            name: "Frango à Píri-píri",
            note: "Inteiro · Meio"
        },
        {
            name: "Prego no Prato",
            note: "com batata, arroz e ovo"
        },
        {
            name: "Prego no Pão"
        },
        {
            name: "Moelas Estufadas",
            price: "265,00 MT"
        }
    ],
    "Peixe & Marisco": [
        {
            name: "Camarão Grelhado",
            note: "1/2 dose · dose"
        },
        {
            name: "Camarão Tigre Grelhado",
            note: "1/2 dose · dose"
        },
        {
            name: "Camarão Cozido",
            price: "585,00 MT"
        },
        {
            name: "Caril de Camarão"
        },
        {
            name: "Lulas Grelhadas ou Fritas"
        },
        {
            name: "Peixe Vermelho"
        },
        {
            name: "Peixe Grelhado com Legumes"
        },
        {
            name: "Filete de Peixe Panado / Grelhado"
        },
        {
            name: "Espetada de Marisco"
        },
        {
            name: "Bacalhau Cozido / Assado"
        }
    ],
    Entradas: [
        {
            name: "Camarão Alhinho",
            price: "650,00 MT"
        },
        {
            name: "Camarão Cozido",
            price: "585,00 MT"
        },
        {
            name: "Azeitonas Marinadas",
            price: "250,00 MT"
        },
        {
            name: "Azeitonas Simples",
            price: "220,00 MT"
        },
        {
            name: "Rissóis e Empadas",
            price: "245,00 MT"
        },
        {
            name: "Rissóis de Camarão",
            price: "165,00 MT"
        },
        {
            name: "Chamussas de Camarão",
            price: "165,00 MT"
        },
        {
            name: "Chamussas de Carne",
            price: "165,00 MT"
        },
        {
            name: "Sopa do Dia",
            price: "180,00 MT"
        },
        {
            name: "Pão de Alho"
        }
    ],
    Acompanhamentos: [
        {
            name: "Batata Frita",
            price: "85,00 MT"
        },
        {
            name: "Batatas Salteadas"
        },
        {
            name: "Arroz"
        },
        {
            name: "Salada"
        },
        {
            name: "Legumes Salteados"
        }
    ],
    Sobremesas: [
        {
            name: "Sorvete Servido na Taça"
        },
        {
            name: "Doce do Dia"
        }
    ],
    Bebidas: [
        {
            name: "Draft Beer"
        },
        {
            name: "Heineken Draft 250ml"
        },
        {
            name: "Refrigerantes"
        },
        {
            name: "Águas"
        },
        {
            name: "Expresso"
        }
    ]
};
const specialties = [
    {
        n: "01",
        title: "Frango na Brasa",
        kicker: "A assinatura da casa",
        desc: "Marinado no dia, grelhado sobre carvão até a pele estalar.",
        img: "/images/fotos/frango-inteiro.webp",
        href: "#menu"
    },
    {
        n: "02",
        title: "Camarão Grelhado",
        kicker: "Do mar para a brasa",
        desc: "Camarão tigre e médio, alho, limão e azeite.",
        img: "/images/fotos/camarao-grelhado.webp",
        href: "#menu"
    },
    {
        n: "03",
        title: "Acompanhamentos",
        kicker: "Tudo é feito na hora",
        desc: "Batata frita, arroz, salada fresca e legumes salteados.",
        img: "/images/p50.webp",
        href: "#menu"
    },
    {
        n: "04",
        title: "Bebidas",
        kicker: "Geladas, sempre",
        desc: "Cerveja de pressão, vinhos e refrigerantes.",
        img: "/images/p53.webp",
        href: "#menu"
    }
];
const gallery = [
    {
        src: "/images/p13.webp",
        alt: "Fachada do Restaurante Píri Píri na Av. 24 de Julho",
        w: 1100,
        h: 825,
        wide: true
    },
    {
        src: "/images/fotos/ambiente-terraco.webp",
        alt: "Cliente a saborear uma bebida na esplanada",
        w: 1000,
        h: 1249
    },
    {
        src: "/images/fotos/pina-colada.webp",
        alt: "Piña colada gelada ao balcão",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/caril-frango.webp",
        alt: "Caril de frango com arroz branco",
        w: 1000,
        h: 1249
    },
    {
        src: "/images/fotos/cocktails.webp",
        alt: "Cocktails frutados com palhinhas coloridas",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/camarao-grelhado.webp",
        alt: "Camarão tigre grelhado com salada e batata frita",
        w: 1200,
        h: 798,
        wide: true
    },
    {
        src: "/images/fotos/frango-inteiro.webp",
        alt: "Frango à Píri-píri com batata frita e limão",
        w: 1200,
        h: 798,
        wide: true
    },
    {
        src: "/images/fotos/cocktail-maracuja.webp",
        alt: "Cocktail de maracujá com laranja e guarda-chuva",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/cerveja-draft.webp",
        alt: "Cerveja de pressão gelada",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/xima-estufado.webp",
        alt: "Estufado servido com xima",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/sangria.webp",
        alt: "Sangria com fruta e jarro de barro",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/arroz-marisco.webp",
        alt: "Arroz de marisco com camarão",
        w: 1200,
        h: 798,
        wide: true
    },
    {
        src: "/images/fotos/bife-panado.webp",
        alt: "Bife panado com ovo estrelado e batata frita",
        w: 1200,
        h: 798,
        wide: true
    },
    {
        src: "/images/fotos/cafe-com-leite.webp",
        alt: "Café com leite em copo de vidro",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/expresso-pastel.webp",
        alt: "Expresso com pastel de nata",
        w: 1000,
        h: 1250
    },
    {
        src: "/images/fotos/takeaway.webp",
        alt: "Embalagens para take away ao balcão",
        w: 1200,
        h: 798,
        wide: true
    },
    {
        src: "/images/p14.webp",
        alt: "Sala do restaurante com mesas e toalhas",
        w: 1100,
        h: 619,
        wide: true
    },
    {
        src: "/images/fotos/peixe-legumes.webp",
        alt: "Peixe grelhado com legumes e azeitonas",
        w: 1200,
        h: 676,
        wide: true
    },
    {
        src: "/images/p15.webp",
        alt: "Interior do restaurante ao fim do dia",
        w: 1100,
        h: 619,
        wide: true
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/reservas.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Configuração da secção "Reservas" — planta 3D real do restaurante.
 *
 * As coordenadas (x / y) seguem o sistema da planta original
 * ("Mapa de Mesas 3D.html"): píxeis da imagem, convertidos para unidades 3D
 * pela escala `scale` (1 px = 0,01 unidades).
 *
 * Zonas:
 *  - "interior": mesas 1 a 21
 *  - "explanada": mesas 101 a 115
 *
 * Para pôr uma mesa fora de serviço, adicione o seu número a `blockedTables`.
 */ __turbopack_context__.s([
    "blockedTables",
    ()=>blockedTables,
    "closeMinutes",
    ()=>closeMinutes,
    "maxPeople",
    ()=>maxPeople,
    "openMinutes",
    ()=>openMinutes,
    "scale",
    ()=>scale,
    "seatsFor",
    ()=>seatsFor,
    "slotStep",
    ()=>slotStep,
    "stayMinutes",
    ()=>stayMinutes,
    "storageKey",
    ()=>storageKey,
    "tableDims",
    ()=>tableDims,
    "tables",
    ()=>tables,
    "zoneConfig",
    ()=>zoneConfig
]);
const tables = [
    // ---------- Interior ----------
    {
        id: 18,
        zone: "interior",
        shape: "lg",
        x: 55,
        y: 35,
        sides: true
    },
    {
        id: 15,
        zone: "interior",
        shape: "lg",
        x: 420,
        y: 32,
        sides: true
    },
    {
        id: 7,
        zone: "interior",
        shape: "lg",
        x: 750,
        y: 35,
        sides: true
    },
    {
        id: 3,
        zone: "interior",
        shape: "lg",
        x: 1158,
        y: 42,
        sides: true
    },
    {
        id: 19,
        zone: "interior",
        shape: "lg",
        x: 20,
        y: 200
    },
    {
        id: 17,
        zone: "interior",
        shape: "lg",
        x: 213,
        y: 203
    },
    {
        id: 14,
        zone: "interior",
        shape: "lg",
        x: 422,
        y: 205
    },
    {
        id: 8,
        zone: "interior",
        shape: "sq",
        x: 638,
        y: 152,
        sides: true
    },
    {
        id: 6,
        zone: "interior",
        shape: "lg",
        x: 772,
        y: 197
    },
    {
        id: 2,
        zone: "interior",
        shape: "lg",
        x: 1167,
        y: 202
    },
    {
        id: 20,
        zone: "interior",
        shape: "sq",
        x: 30,
        y: 405,
        sides: true
    },
    {
        id: 16,
        zone: "interior",
        shape: "sq",
        x: 240,
        y: 470,
        sides: true
    },
    {
        id: 12,
        zone: "interior",
        shape: "sq",
        x: 443,
        y: 462,
        sides: true
    },
    {
        id: 9,
        zone: "interior",
        shape: "sq",
        x: 638,
        y: 353,
        sides: true
    },
    {
        id: 10,
        zone: "interior",
        shape: "sq",
        x: 635,
        y: 462,
        sides: true
    },
    {
        id: 5,
        zone: "interior",
        shape: "sq",
        x: 822,
        y: 465,
        sides: true
    },
    {
        id: 4,
        zone: "interior",
        shape: "lg",
        x: 1003,
        y: 367
    },
    {
        id: 1,
        zone: "interior",
        shape: "sq",
        x: 1208,
        y: 525,
        sides: true
    },
    {
        id: 21,
        zone: "interior",
        shape: "sq",
        x: 37,
        y: 585,
        sides: true
    },
    {
        id: 11,
        zone: "interior",
        shape: "sq",
        x: 443,
        y: 602,
        sides: true
    },
    // ---------- Explanada ----------
    {
        id: 102,
        zone: "explanada",
        shape: "pt",
        x: 40,
        y: 385,
        sides: true
    },
    {
        id: 104,
        zone: "explanada",
        shape: "pt",
        x: 256,
        y: 385,
        sides: true
    },
    {
        id: 106,
        zone: "explanada",
        shape: "pt",
        x: 472,
        y: 385,
        sides: true
    },
    {
        id: 108,
        zone: "explanada",
        shape: "pt",
        x: 688,
        y: 385,
        sides: true
    },
    {
        id: 110,
        zone: "explanada",
        shape: "pt",
        x: 904,
        y: 385,
        sides: true
    },
    {
        id: 112,
        zone: "explanada",
        shape: "pt",
        x: 1120,
        y: 385,
        sides: true
    },
    {
        id: 114,
        zone: "explanada",
        shape: "pt",
        x: 1336,
        y: 385,
        sides: true
    },
    {
        id: 101,
        zone: "explanada",
        shape: "pt",
        x: 40,
        y: 780,
        sides: true
    },
    {
        id: 103,
        zone: "explanada",
        shape: "pt",
        x: 256,
        y: 780,
        sides: true
    },
    {
        id: 105,
        zone: "explanada",
        shape: "pt",
        x: 472,
        y: 780,
        sides: true
    },
    {
        id: 107,
        zone: "explanada",
        shape: "pt",
        x: 688,
        y: 780,
        sides: true
    },
    {
        id: 109,
        zone: "explanada",
        shape: "pt",
        x: 904,
        y: 780,
        sides: true
    },
    {
        id: 111,
        zone: "explanada",
        shape: "pt",
        x: 1120,
        y: 780,
        sides: true
    },
    {
        id: 115,
        zone: "explanada",
        shape: "pt",
        x: 1336,
        y: 780,
        sides: true
    }
];
const seatsFor = (t)=>t.shape === "lg" && t.sides ? 6 : 4;
const scale = 0.01;
const tableDims = {
    lg: [
        1.52,
        0.75
    ],
    sq: [
        0.76,
        0.76
    ],
    pt: [
        1.5,
        1.95
    ]
};
const zoneConfig = {
    interior: {
        name: "Interior",
        w: 1500,
        h: 720,
        cz: 0,
        tile: 1.8,
        light: "#a8a8a8",
        dark: "#5b5b5d",
        top: 13.5,
        persp: [
            9.5,
            8.5
        ]
    },
    explanada: {
        name: "Explanada",
        w: 1560,
        h: 1000,
        cz: 10.2,
        tile: 0.76,
        light: "#e3e1dd",
        dark: "#3f7d57",
        top: 15.5,
        persp: [
            11,
            9.5
        ]
    }
};
const blockedTables = [];
const maxPeople = 6;
const openMinutes = 10 * 60;
const closeMinutes = 22 * 60;
const slotStep = 30;
const stayMinutes = 120;
const storageKey = "piripiri:reservas:v1";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "coordinates",
    ()=>coordinates,
    "facebookHref",
    ()=>facebookHref,
    "instagramHref",
    ()=>instagramHref,
    "mapsHref",
    ()=>mapsHref,
    "mapsPlaceHref",
    ()=>mapsPlaceHref,
    "telHref",
    ()=>telHref,
    "waHref",
    ()=>waHref,
    "waLink",
    ()=>waLink,
    "waReservasLink",
    ()=>waReservasLink,
    "waReservasNumber",
    ()=>waReservasNumber
]);
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}
const telHref = "tel:+258846724350";
const waHref = "https://wa.me/258846724350?text=Ol%C3%A1%20Piri%20Piri%2C%20gostaria%20de%20fazer%20um%20pedido.";
const waLink = (text)=>`https://wa.me/258846724350?text=${encodeURIComponent(text)}`;
const waReservasNumber = "258866473065";
const waReservasLink = (text)=>`https://wa.me/${waReservasNumber}?text=${encodeURIComponent(text)}`;
const mapsHref = "https://www.google.com/maps/dir/?api=1&destination=-25.9766875,32.5928125";
const mapsPlaceHref = "https://www.google.com/maps/search/?api=1&query=Restaurante+Piri+Piri+Av.+24+de+Julho+Maputo";
const facebookHref = "https://www.facebook.com/restaurantepiripirimaputo/";
const instagramHref = "https://www.instagram.com/restaurantepiripirimaputo";
const coordinates = {
    lat: -25.9766875,
    lng: 32.5928125
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=_0k5dgyzl-g-ss._.js.map