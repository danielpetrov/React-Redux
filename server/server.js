(function iife() {
    'use strict';

    var express = require('express'),
        path = require('path'),
        app = express(),
        port = 3000;

    app.use(express.static('./dist'));

    app.use('/', function (req, res) {
        res.sendFile(path.resolve('client/', 'index.html'));
    });

    app.listen(port, function (error) {
        if (error) {
            throw error;
        }
        console.log("Express server listening on port", port);
    });
}());

