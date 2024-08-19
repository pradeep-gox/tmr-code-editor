import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// @ts-ignore
import postcss from "./postcss.config.js";

export default defineConfig({
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  plugins: [react()],
  css: {
    postcss,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TMRCodeEditor",
      fileName: (format) => `code-editor.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    minify: "terser", // Explicitly use Terser for minification
    assetsInlineLimit: 0, // Ensures CSS is output as a separate file
  },
});
