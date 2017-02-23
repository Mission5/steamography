/*eslint-env node*/

// ------------------------------------------------------------------------------
// node.js starter application for Bluemix
// used only for deployment to Bluemix server
// ------------------------------------------------------------------------------

var express = require('express')
var path = require('path')

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv')

// create a new express server
var app = express()

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/dist'))

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv()

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
  // print a message when the server starts listening
  console.log('server starting on ' + appEnv.url)
})
