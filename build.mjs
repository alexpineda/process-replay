import { build } from "esbuild";
import { polyfillNode } from "esbuild-plugin-polyfill-node";

build({
	entryPoints: ["src/index.ts"],
	bundle: true,
	outfile: "dist/browser.js",
	plugins: [
		polyfillNode({
			// Options (optional)
            
		}),
	],
	tsconfig: "tsconfig.browser.json",
	platform:"node"
	
});