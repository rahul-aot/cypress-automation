const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "qmdwsh",
    pageLoadTimeout: 180000,
    // specPattern: "cypress/testcases/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
