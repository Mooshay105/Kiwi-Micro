import { resolve } from "path";
import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
	root,
	plugins: [reactRefresh()],
	build: {
		outDir,
		emptyOutDir: true,
		rollupOptions: {
			input: {
				home: resolve(root, "index.html"),
				kcamera: resolve(root, "kcamera.html"),
				kstore: resolve(root, "kstore.html"),
				support: resolve(root, "support.html"),
			},
		},
	},
});
