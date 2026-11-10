const fs = require("node:fs");
const path = require("node:path");

const root = __dirname;
const output = path.join(root, "dist");

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(output, "index.html"));

console.log("Build concluído: site estático gerado em ./dist");
