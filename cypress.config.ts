import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "1awvtg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://127.0.0.1:5173",
    excludeSpecPattern: ["./cypress/e2e/FaultModel.cy.ts"],
  },
});
