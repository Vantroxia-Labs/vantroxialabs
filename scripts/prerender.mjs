/**
 * Post-build prerender step for Vantroxia Labs LTD marketing site:
 * 1. Renders <App /> into static HTML inside dist/index.html so crawlers and
 *    no-JS link scrapers receive the full semantic document immediately.
 * 2. Injects a font <link rel="preload"> for the primary Latin Sans woff2 asset.
 * 3. Writes dist/robots.txt and dist/sitemap.xml with build-date <lastmod>.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const siteUrl = (process.env.VITE_SITE_URL || "https://vantroxialabs.com").replace(/\/+$/, "");

const { render } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const ROOT_DIV = '<div id="root"></div>';
if (!template.includes(ROOT_DIV)) {
  throw new Error("dist/index.html is missing <div id=\"root\"></div>; run `vite build` first.");
}

// Preload primary Latin variable font for faster LCP text rendering.
const assets = await fs.readdir(path.join(dist, "assets"));
const primaryFont = assets.find((f) => /^plus-jakarta-sans-latin-wght-normal-.*\.woff2$/.test(f));
const preloadTag = primaryFont
  ? `    <link rel="preload" href="/assets/${primaryFont}" as="font" type="font/woff2" crossorigin />\n`
  : "";

const appHtml = render();
const checks = [
  [/<h1[\s>]/, "missing <h1>"],
  [/https:\/\/gymmatehub\.com/, "missing GymMateHub link"],
  [/https:\/\/aegisremit\.ng/, "missing AegisRemit link"],
  [/rel="canonical"/, "missing canonical link"],
  [/property="og:image"/, "missing og:image"],
  [/application\/ld\+json/, "missing JSON-LD structured data"],
];

const finalHtml = template
  .replace("</head>", `${preloadTag}  </head>`)
  .replace(ROOT_DIV, `<div id="root">${appHtml}</div>`);

for (const [pattern, message] of checks) {
  if (!pattern.test(finalHtml)) {
    throw new Error(`SEO prerender check failed: ${message}`);
  }
}

await fs.writeFile(path.join(dist, "index.html"), finalHtml);

const today = new Date().toISOString().slice(0, 10);
await fs.writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
await fs.writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${siteUrl}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>1.0</priority>\n  </url>\n</urlset>\n`,
);

console.log(`Prerendered dist/index.html, robots.txt, and sitemap.xml (${siteUrl})`);

