const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const output = path.join(root, "dist");

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

// Copia a página principal.
fs.copyFileSync(path.join(root, "index.html"), path.join(output, "index.html"));

// Copia os sprites locais para que também sejam publicados no Cloudflare Pages.
const assets = path.join(root, "assets");
if (fs.existsSync(assets)) {
  fs.cpSync(assets, path.join(output, "assets"), { recursive: true });
}

console.log("Build concluído: site estático e sprites gerados em ./dist");
