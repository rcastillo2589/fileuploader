const express = require('express');
const url = require('url');
const Pool = require('pg').Pool;
const aws = require('aws-sdk');

const config = require('./config/appConfig');
const index = require('./routes/index');

const pool = new Pool(config.poolConfig);
const app = express();

app.set('port', config.port);

// Routing
app.use(index);

var server = app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = server;
