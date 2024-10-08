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
				gallery: resolve(root, "gallery.html"),
				contact: resolve(root, "contact.html"),
			},
		},
	},
});
