const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Vite'in varsayılan adresi
    setupNodeEvents(on, config) {
      // burası boş kalabilir
    },
  },
});