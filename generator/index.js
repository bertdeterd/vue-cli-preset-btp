
module.exports = (api, opts) => {

    api.extendPackage({
        dependencies: {
            'saprfc': 'latest'
        }
    });


    api.render('./template')



    // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
    api.onCreateComplete(() => {

        //api.exitLog('Discordxx community: https://community.vuetifyjs.com')
        //api.exitLog('Githubxx: https://github.com/vuetifyjs/vuetify')
        //api.exitLog('Supportxx Vuetify: https://github.com/sponsors/johnleider')
    })
}