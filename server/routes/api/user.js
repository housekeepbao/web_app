var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../../models/User.js');
const UserSession = require('../../models/UserSession.js');

/* GET ALL USERS */
module.exports = (app) => {

    var users = require('../../controllers/user.controller.js');

    // Sign up
    app.post('/api/account/signup', users.signup);

    // Sign in
    app.post('/api/account/signin', users.signin);

    // Verify
    app.get('/api/account/verify', users.verify);

    // Logout
    app.get('/api/account/logout', users.logout);
};