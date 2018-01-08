
const express = require('express');
const User = require('../models/user');
const valid = require('../configs/validation');
var cookie = require('cookie');


exports.allUsers = function (req, res) {
    User.find({}).sort({ createdAt: -1 })
        .exec((err, user) => {
            if (err) {
                return res.json({ status: false, message: err });
            }
            return res.json(user);
        });
};
exports.login = function (req, res) {
    if (!valid.email(req.body.email)) {
        return res.json({ status: false, message: 'Falsche Email Adresse oder falsches Passwort!' });
    }
    if (!valid.emailLength(req.body.email)) {
        return res.json({ status: false, message: 'Falsche Email Adresse oder falsches Passwort!' });
    }
    if (!valid.passwordLength(req.body.password)) {
        return res.json({ status: false, message: 'Falsche Email Adresse oder falsches Passwort!' });
    }
    else {
        User.findOne({ 'email': req.body.email }, (err, user) => {
            if (err) {
                return res.json({ status: false, message: err });
            }
            if (!user) {
                return res.json({ status: false, message: 'Falsche Email Adresse oder falsches Passwort!' });
            }
            if (!user.validPassword(req.body.password)) {
                return res.json({ status: false, message: 'Falsche Email Adresse oder falsches Passwort!' });
            }
            user.password='';
            Reflect.deleteProperty(user, 'password');
            return res.json({ status: true, message: 'User successfully logged in.', user: user });
        })
    }
};
exports.signup = function (req, res) {
    if (!valid.email(req.body.email)) {
        return res.json({ status: false, message: 'Invalid Email' });
    }
    if (!valid.usernameLength(req.body.username)) {
        return res.json({ status: false, message: 'Invalid Username Length' });
    }
    if (!valid.emailLength(req.body.email)) {
        return res.json({ status: false, message: 'Invalid email Length' });
    }
    if (!valid.passwordLength(req.body.password)) {
        return res.json({ status: false, message: 'Invalid password Length' });
    }
    else {
        var user = new User({
            username: req.body.username,
            password: req.body.password,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        });
        user.password = user.generateHash(user.password);
        user.save((err) => {
            if (err) {
                return res.send(err);
            }
            return res.json({ status: true, message: 'New User Created!' });
        });
    }
};