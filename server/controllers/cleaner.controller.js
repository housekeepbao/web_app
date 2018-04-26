var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Cleaner = require('../models/Cleaner.js');
const CleanerSession = require('../models/CleanerSession.js');

exports.signup = function (req, res) {
    const { body } = req;
    console.log('body', body);
    const {
        firstName,
        lastName,

        password,
        country,
        workerAccount,
        workerReigon,
        workerAddress,
        experience,
        skill,
        transportation,
        serviceReigon,
        isDeleted,
        sex
    } = body;

    let {
        email
    } = body;

    let {
        phoneNumber
    } = body;

    if (!phoneNumber) {
        return res.status(400).send({
            success: false,
            message: 'Error: Phone number cannot be blank.'
        });
    }

    if (!email) {
        return res.status(400).send({
            success: false,
            message: 'Error: email name cannot be blank.'
        });
    }

    if (!password) {
        return res.status(400).send({
            success: false,
            message: 'Error: password cannot be blank.'
        });
    }

    email = email.toLowerCase();

    // Steps:
    //1. Verify phone number doesn't exist
    //2. Save
    Cleaner.find({
        //email: email,
        phoneNumber: phoneNumber
    }, (err, previousCleanerUsers) => {
        if (err) {
            return res.status(400).send({
                success: false,
                message: 'Error: Server error.'
            });
        } else if (previousCleanerUsers.length > 0) {
            return res.status(400).send({
                success: false,
                message: 'Error: Account(phone number) already exist.'
            });
        }

        // Save the new user
        const newCleanerUser = new Cleaner();

        newCleanerUser.email = email;
        newCleanerUser.phoneNumber = phoneNumber;
        newCleanerUser.firstName = firstName;
        newCleanerUser.lastName = lastName;

        newCleanerUser.country = country;
        newCleanerUser.workerAccount = workerAccount;
        newCleanerUser.workerReigon = workerReigon
        newCleanerUser.workerAddress = workerAddress;
        newCleanerUser.experience = experience;
        newCleanerUser.skill = skill;
        newCleanerUser.transportation = transportation;
        newCleanerUser.serviceReigon = serviceReigon;
        newCleanerUser.sex = sex;

        newCleanerUser.password = newCleanerUser.generateHash(password);
        newCleanerUser.save((err, cleaner) => {
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: 'Error: Server error.'
                });
            }
            console.log(cleaner);
            return res.status(201).json(cleaner);
        });
    });
};

exports.signin = function (req, res) {
    const { body } = req;
    const {
        password,
    } = body;
    let {
        email
    } = body;

    let {
        phoneNumber
    } = body;

    if (!phoneNumber) {
        return res.status(400).send({
            success: false,
            message: 'Error: phone number cannot be blank.'
        });
    }

    if (!password) {
        return res.status(400).send({
            success: false,
            message: 'Error: password cannot be blank.'
        });
    }
    //email = email.toLowerCase();

    Cleaner.find({
        // email: email
        phoneNumber: phoneNumber
    }, (err, cleaners) => {
        if (err) {
            return res.status(400).send({
                success: false,
                message: 'Error: server error'
            });
        }

        if (cleaners.length != 1) {
            return res.status(400).send({
                success: false,
                message: 'Error: Invalid'
            });
        }

        const cleaner = cleaners[0];
        if (!cleaner.validPassword(password)) {
            return res.status(400).send({
                success: false,
                message: 'Error: Invalid, it may password incorrect'
            })
        }

        const cleanerSession = new CleanerSession();
        cleanerSession.userId = cleaner._id;
        cleanerSession.save((err, doc) => {
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: 'Error: server error'
                });
            }

            return res.status(200).send({
                success: true,
                message: 'Valid sign in',
                token: doc._id,
                email: email,
                phoneNumber: phoneNumber
            });
        });
    });
};

exports.verify = function (req, res) {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token= test

    // Verify the token is one of a kind and it's not deleted
    CleanerSession.find({
        _id: token,
        isDeleted: false
    }, (err, sessions) => {
        if (err) {
            return res.status(400).send({
                success: false,
                message: 'Error: Server error'
            });
        }

        if (sessions.length != 1) {
            return res.status(400).send({
                success: false,
                message: 'Error: Invalid'
            });
        } else {
            return res.status(200).send({
                success: true,
                message: 'Good, verified account'
            });
        }
    });
};

exports.logout = function (req, res) {
    const { query } = req;
    const { token } = query;
    // ?token= test

    // Verify the token is one of a kind and it
    CleanerSession.findOneAndUpdate({
        _id: token,
        isDeleted: false
    }, {
            $set: {
                isDeleted: true
            }
        },
        null, (err, sessions) => {
            if (err) {
                return res.status(400).send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            return res.status(200).send({
                success: true,
                message: 'Good, logout account'
            });
        });
};