'use strict';

var pathToRegexp = require('path-to-regexp');
var config = require('../../config/config.json').mock;
var mockConfigUrl = 'http://127.0.0.1:3333';
var mockConfigEnabled = true;
var mockList = require('./mock.json');

module.exports = mock;

function mock(req, res, next) {
    if (mockConfigEnabled) {
        var path = req.path;
        var method = req.method;
        var mockEnabled = isMock(path, method);

        if (mockEnabled) {
            req.pipe(mockConfigUrl + path);
        } else {
            next();
        }
    } else {
        next();
    }
}

function isMock(path, method) {
    var result = false;
    mockList.forEach(function (item) {
        var re = pathToRegexp(item.path);
        if (re.exec(path) && item.enable[method]) {
            result = true;
        }
    });

    return result;
}
