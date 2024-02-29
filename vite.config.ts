import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [relay, react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "@testing-library/jest-dom",
    server: {
      deps: {
        inline: ["@gns-science/toshi-nest", "react-leaflet-fullscreen-plugin", "leaflet"],
      },
    },
    deps: {
      optimizer: {
        web: {
          include: ["@gns-science/toshi-nest", "react-leaflet-fullscreen-plugin", "leaflet"],
        },
      },
    },
    // css: {
    //   include: /.+/,
    // },
  },
  build: {
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  assetsInclude: ["**/*.md", "**/*.css"],
  optimizeDeps: {
    include: ["@gns-science/toshi-nest", "react-leaflet-fullscreen-plugin", "leaflet"],
    esbuildOptions: {
      plugins: [
        esbuildCommonjs([
          "react-relay",
          "@gns-science/toshi-nest",
          "d3-array",
          "react-leaflet-fullscreen-plugin",
          "leaflet",
        ]),
      ],
    },
  },
});
