import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [relay, react()],
  // optimizeDeps: { include: ["@gns-science/toshi-nest"] },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "@testing-library/jest-dom",
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  assetsInclude: ["**/*.md"],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["react-relay"])],
    },
  },
});
