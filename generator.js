// Utilities
const { exec } = require('child_process')

async function run (api, command) {
  let subprocess

  try {
    subprocess = exec(command, {
      cwd: api.resolve(''),
      env: {
        ...process.env,
        VUE_CLI_SKIP_DIRTY_GIT_PROMPT: true,
      }
    }, stderr => Promise.resolve({ stderr }))
  } catch (e) { console.log(e) }

  return subprocess
}

module.exports = (api, { preset = 'base' }) => {
  api.onCreateComplete(async () => {
    //const presetName = `Vuetify ${preset} preset`
    //const projectName = api.rootOptions.projectName
    let subprocess

   console.log(' Created!!!!')
  })
}