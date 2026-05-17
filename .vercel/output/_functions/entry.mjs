import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_D4kAaTSb.mjs';
import { manifest } from './manifest_9k_YYYfv.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/subscribe.astro.mjs');
const _page4 = () => import('./pages/blog/_---page_.astro.mjs');
const _page5 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page6 = () => import('./pages/case-studies/techgears.astro.mjs');
const _page7 = () => import('./pages/case-studies.astro.mjs');
const _page8 = () => import('./pages/contact.astro.mjs');
const _page9 = () => import('./pages/newsletter.astro.mjs');
const _page10 = () => import('./pages/projects.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/search.json.astro.mjs');
const _page13 = () => import('./pages/tags/_slug_/_---page_.astro.mjs');
const _page14 = () => import('./pages/tags.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.17.1_@vercel+functions@3.6.0_jiti@2.6.1_lightningcss@1.30.2_rollup@4.57.1_typescript@5.9.3_yaml@2.8.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/subscribe.ts", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/blog/[...slug].astro", _page5],
    ["src/pages/case-studies/techgears.astro", _page6],
    ["src/pages/case-studies/index.astro", _page7],
    ["src/pages/contact.astro", _page8],
    ["src/pages/newsletter.astro", _page9],
    ["src/pages/projects.astro", _page10],
    ["src/pages/rss.xml.js", _page11],
    ["src/pages/search.json.ts", _page12],
    ["src/pages/tags/[slug]/[...page].astro", _page13],
    ["src/pages/tags/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0d154ab2-4f9f-4e5e-880a-32518f299f39",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
