module.exports = [
"[project]/lib/three-scene.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/lib_three-scene_ts_1pr5xkd7hwzqv._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/lib/three-scene.ts [app-ssr] (ecmascript)");
    });
});
}),
"[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/node_modules_lenis_dist_lenis_mjs_017u2vt4hd-m0._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
    });
});
}),
];