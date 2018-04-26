var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../../models/Order.js');

/* GET ALL CLEANER */
module.exports = (app) => {
    var orders = require('../../controllers/order.controller.js');

    app.get('/api/order/', orders.getall);
    
    app.post('/api/order', orders.save);

    app.get('/api/order/:id', orders.get);

    app.put('/api/order/:id', orders.update);

    app.delete('/api/order/:id', orders.delete);
};