var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Cleaner = require('../../models/Cleaner.js');
const CleanerSession = require('../../models/CleanerSession.js');

/* GET ALL CLEANER */
module.exports = (app) => {
    var cleaners = require('../../controllers/cleaner.controller.js');

    // Sign up
    app.post('/api/cleaner/account/signup', cleaners.signup);

    // Sign in
    app.post('/api/cleaner/account/signin', cleaners.signin);

    // Verify
    app.get('/api/cleaner/account/verify', cleaners.verify);

    // Logout
    app.get('/api/cleaner/account/logout', cleaners.logout);
};