module.exports = (api, opts) => {
    const fs = require("fs-extra")
       
  
    // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
    api.onCreateComplete(() => {
    
  
      api.exitLog('Discord community: https://community.vuetifyjs.com')
      api.exitLog('Github: https://github.com/vuetifyjs/vuetify')
      api.exitLog('Support Vuetify: https://github.com/sponsors/johnleider')
    })
  }