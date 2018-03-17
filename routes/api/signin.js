var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../../models/User.js');
const UserSession = require('../../models/UserSession.js');

/* GET ALL USERS */
module.exports = (app) => {

    app.post('/api/account/signup', (req, res, next) => {
        const {body} = req;
        console.log('body', body);
        const {
            firstName,
            lastName,
            password 
        } = body ;
        let {
            email
        } = body;

        let {
            phoneNumber
        } = body;

        if (!firstName) {
            return res.send({
                success: false,
                message: 'Error: First name cannot be blank.' 
            });
        }

        if (!lastName) {
            return res.send({
                success: false,
                message: 'Error: Last name cannot be blank.' 
            });
        }

        if (!phoneNumber) {
            return res.send({
                success: false,
                message: 'Error: Phone number cannot be blank.' 
            });
        }

        if (!email) {
            return res.send({
                success: false,
                message: 'Error: email name cannot be blank.' 
            });
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: password cannot be blank.' 
            });
        }

        email = email.toLowerCase();
    
        // Steps:
        //1. Verify phone number doesn't exist
        //2. Save
        User.find({
            // email: email
            phoneNumber: phoneNumber
        }, (err, previousUsers) =>{
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error.' 
                });
            } else if (previousUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Account(phone number) already exist.' 
                });
            }
            
            // Save the new user
            const newUser = new User();
        
            newUser.email = email;
            newUser.phoneNumber = phoneNumber;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save((err,user) =>{
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error.' 
                    });
                }
                
                return res.send({
                    success: true,
                    message: 'Signed up'
                });
            });
        });
    });

    app.post('/api/account/signin', (req, res, next) => {
        const {body} = req;
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
            return res.send({
                success: false,
                message: 'Error: phone number cannot be blank.' 
            });
        }

        if (!password) {
            return res.send({
                success: false,
                message: 'Error: password cannot be blank.' 
            });
        }
        email = email.toLowerCase();

        User.find({
            // email: email
            phoneNumber: phoneNumber
        }, (err, users)=> {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                });
            }

            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid, it may password incorrect'
                })
            }
            
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success:false,
                        message:'Error: server error'
                    });
                }
                
                return res.send({
                    success: true,
                    message: 'Valid sign in',
                    token: doc._id,
                    email: email,
                    phoneNumber: phoneNumber
                });
            });
        });
    });

    app.get('/api/account/verify', (req, res, next) => {
        // Get the token
        const {query } = req;
        const { token} = query;
        // ?token= test

        // Verify the token is one of a kind and it's not deleted
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }

            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else{
                return res.send({
                    success: true,
                    message: 'Good, verified account'
                });
            }
        });
    });

    app.get('/api/account/logout', (req, res, next) => {
        const {query } = req;
        const { token} = query;
         // ?token= test
 
         // Verify the token is one of a kind and it
        UserSession.findOneAndUpdate({
             _id: token,
             isDeleted: false
        }, {
            $set:{
                isDeleted: true
            }
        },
        null, (err, sessions) => {
            if (err) {
                 return res.send({
                     success: false,
                     message: 'Error: Server error'
                 });
            }
 
            return res.send({
                success: true,
                message: 'Good, logout account'
            });
            
        });    
    });
};