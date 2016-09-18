# Express Mock

## Normal Case
1. require mock

        var mock = require('mockPath')

2. Express use

        var app = require('express')();
        app.use(mock);

## In Addition

We can use config file to config mock url and enabled.

So we can set mock disabled when to the production environment.