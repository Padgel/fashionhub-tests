const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || 'http://localhost:4000/fashionhub/',
    supportFile: false,
    setupNodeEvents(on, config) {
      
    },
    env: {
      loginUrl: '/login.html',
      githubRepo: 'https://github.com/appwrite/appwrite/pulls'
    }
  }
});