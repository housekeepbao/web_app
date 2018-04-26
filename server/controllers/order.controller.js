var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Cleaner = require('../models/Cleaner.js');
const Order = require('../models/Order.js');
const User = require('../models/User.js');


/* GET ALL ORDER */
exports.getall = function (req, res, next) {
    Order.find({

    },(err, orders)=> {
        if (err) {
            return res.status(400).send({
                success: false,
                message: 'Error: Server error'
            });
        }
        return res.status(200).json(orders);
    });
};

/* GET SINGLE ORDER BY ID */
exports.get = function (req, res, next) {
    if (req.params.userId) {
        Order.findById(req.params.id, function (err, post) {
            if (err) return next(err);
            res.status(200).json(post);
        });
    }
};

/* SAVE ORDER */
exports.save = function (req, res) {
    const {body} = req;
    let user = body.user;
    let cleaner = body.cleaner;

    //1.verify user is exist
    User.find({
        phoneNumber: user.phoneNumber
    },(err, existedUser) => {
        if (err) {
            return res.status(400).send({
                success: false,
                message: 'Error: Server error.'
            });
        } else if (existedUser.length == 0) {
            return res.status(400).send({
                success: false,
                message: 'Error: User(phone number) doesn\'t exist.'
            });
        }

        //2.verify cleaner is exist and availble
        Cleaner.find({
            phoneNumber: cleaner.phoneNumber
        },(err, existedCleaner) =>{
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: 'Error:Server error.'
                });
            } else if (existedCleaner.length == 0) {
                return res.status(400).send({
                    success: false,
                    message: 'Error: Cleaner(phone number) doesn\'t exist.'
                });
            }

            //3.save this order
            var newOrder = new Order({
                user: user,
                cleaner: cleaner,
                serve_date: '',
                serve_region: body.serve_region,
                price: body.price,
            });

            newOrder.save((err, order) => {
                if (err) {
                    return res.status(400).send({
                        success: false,
                        message: 'Error: Server error.'
                    });
                }
                return res.status(201).json(order);
            });
        });
    });
};

/* UPDATE ORDER */
exports.update = function (req, res, next) {

    Order.findByIdAndUpdate(req.params.id, req.body, function (err, newOrder) {
        if (err) return next(err);
        res.status(204).json(newOrder);
    });
};

/* DELETE ORDER */
exports.delete = function (req, res, next) {

    Order.findByIdAndRemove(req.params.id, req.body, function (err, deletedOrder) {
        if (err) return next(err);
        res.status(204).json(deletedOrder);
    });
};

