'use strict';

var express = require('express');
var app = express();
var router = require('./api/index')

require('./database');

app.use('/', express.static('public'));

app.use('/api', router);

app.listen(8080, function () {
    console.log('The server is running on port 8080.');
});