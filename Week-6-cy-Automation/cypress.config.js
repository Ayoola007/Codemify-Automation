const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://dev.delekhomes.com",
    defaultCommandTimeout: 10000,
    viewportWidth: 1400,
    viewportHeight: 1200,
  },
});
