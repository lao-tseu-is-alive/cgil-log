import fs from "fs";

const outdir = "./dist";

// 1. Nettoyage
console.log("Nettoyage du répertoire dist...");
fs.rmSync(outdir, { recursive: true, force: true });

const sharedConfig = {
  outdir,
  minify: true,
  sourcemap: "external" as const,
};

// 2. Génération des bundles
console.log("Construction des bundles avec Bun...");
await Promise.all([
  // Module ES (pour les bundlers modernes)
  Bun.build({ ...sharedConfig, entrypoints: ["./src/index.ts"], format: "esm", naming: "cgLog.esm.js" }),

  // CommonJS (pour Node.js)
  Bun.build({ ...sharedConfig, entrypoints: ["./src/index.ts"], format: "cjs", naming: "cgLog.cjs.js" }),

  // Navigateur (IIFE avec le point d'entrée spécifique que nous avons créé)
  Bun.build({ ...sharedConfig, entrypoints: ["./src/browser.ts"], format: "iife", naming: "cgLog.umd.js" })
]);

console.log("Bundles générés avec succès 🚀");
