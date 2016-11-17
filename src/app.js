'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

var router = express.Router();

router.get('/todos', function(req, res) {
    res.json({todo: []});
});

app.use('/api', router);

app.listen(8080, function () {
    console.log('The server is running on port 8080.');
});