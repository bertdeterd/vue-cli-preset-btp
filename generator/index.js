
module.exports = (api, options) => {

    api.extendPackage({
        config: {
            "mtarname": "webapp"
        },
        dependencies: {
            'saprfc': '^1.1.3'
        }
    });

    api.extendPackage({
        scripts: {
            "build:mta": "mbt build -t ./",
            "deploy:mta": "cf7 deploy ",
            "zip": "cd dist/ && bestzip ../mta/resources/uimodule.zip *"
        }
    })

    api.render('./template', {
        ...options,
    });



    // adapted from https://github.com/Akryum/vue-cli-plugin-apollo/blob/master/generator/index.js#L68-L91
    api.onCreateComplete(() => {

        //api.exitLog('Discordxx community: https://community.vuetifyjs.com')
        //api.exitLog('Githubxx: https://github.com/vuetifyjs/vuetify')
        //api.exitLog('Supportxx Vuetify: https://github.com/sponsors/johnleider')
    })
}