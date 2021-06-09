//options for the generator
module.exports = [
  {
    type: 'input',
    name: 'appname',
    message: 'Short name',
    default: 'mytask',
  },
  {
    type: 'input',
    name: 'appservice',
    message: 'SAP Cloud service',
    default: 'cloudwf',
  },
  {
    type: 'input',
    name: 'apidestination',
    message: 'Destination',
    default: 'SAP_HTTPS_EJ_BA'
  }
 

]