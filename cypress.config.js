const { defineConfig } = require('cypress')

module.exports = defineConfig({
    projectId: "yh1f6w",
    e2e: {
        baseUrl: 'http://localhost:3000',
        supportFile: false
      },
})
