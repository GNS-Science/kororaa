import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "1awvtg",
  e2e: {
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },
    baseUrl: "http://localhost:5173",
    excludeSpecPattern: [],
    testIsolation: false, // our e2e tests are setup assuming no isolation
  },
});
