import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/**/*.ts"],
  name: "MC Server Creator",
  format: ["cjs", "esm"],
  target: "esnext",
  dts: true,
  clean: false,
  outDir: "out/",
  tsconfig: "tsconfig.json",
});
