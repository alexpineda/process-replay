import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/browser.js",
  plugins: [
    polyfillNode({
      globals: {
        process: true,
        global: true,
        __dirname: true,
        __filename: true,
        Buffer: true,
      },
    }),
  ],
  tsconfig: "tsconfig.browser.json",
  platform: "browser",
});
