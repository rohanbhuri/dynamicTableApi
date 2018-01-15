const express = require('express');
const User = require('../models/user');
const valid = require('../configs/validation');
var cookie = require('cookie');


exports.allUsers = function (req, res) {
  User.find({}).sort({
      createdAt: -1
    })
    .exec((err, user) => {
      if (err) {
        return res.json({
          status: false,
          message: err
        });
      }
      return res.json(user);
    });
};
exports.login = function (req, res) {
  if (!valid.email(req.body.email)) {
    return res.json({
      status: false,
      message: 'Invalid Email'
    });
  }
  if (!valid.emailLength(req.body.email)) {
    return res.json({
      status: false,
      message: 'Invalid Email Length'
    });
  }
  if (!valid.passwordLength(req.body.password)) {
    return res.json({
      status: false,
      message: 'Invalid Password Length'
    });
  } else {
    User.findOne({
      'email': req.body.email
    }, (err, user) => {
      if (err) {
        return res.json({
          status: false,
          message: err
        });
      }
      if (!user) {
        return res.json({
          status: false,
          message: 'Wrong email address or Password!'
        });
      }
      if (!user.validPassword(req.body.password)) {
        return res.json({
          status: false,
          message: 'Wrong email address or Password!'
        });
      }
      user.password = undefined;
      return res.json({
        status: true,
        message: 'User successfully logged in.',
        user: user
      });
    })
  }
};
exports.signup = function (req, res) {
  if (!valid.email(req.body.email)) {
    return res.json({
      status: false,
      message: 'Invalid Email'
    });
  }
  if (!valid.usernameLength(req.body.username)) {
    return res.json({
      status: false,
      message: 'Invalid Username Length'
    });
  }
  if (!valid.emailLength(req.body.email)) {
    return res.json({
      status: false,
      message: 'Invalid email Length'
    });
  }
  if (!valid.passwordLength(req.body.password)) {
    return res.json({
      status: false,
      message: 'Invalid password Length'
    });
  } else {
    var user = new User({
      username: req.body.username,
      password: req.body.password,
      // firstname: req.body.firstname,
      // lastname: req.body.lastname,
      email: req.body.email
    });
    user.password = user.generateHash(user.password);
    user.save((err) => {
      if (err) {
        return res.json({
          status: false,
          message: 'Email already exist',
          errmsg: err.errmsg
        });
      }
      return res.json({
        status: true,
        message: 'User registered successfully!'
      });
    });
  }
};

exports.updateUser = function (req, res) {
  User.findOne({
    '_id': req.params.id
  }, (err, user) => {
    if (err) {
      return res.json({
        status: false,
        message: err
      });
    }
    if (user) {
      User.findByIdAndUpdate(user._id, data, (err, user) => {
        if (err) {
          console.log(err)
          return res.json({
            status: false,
            message: err
          });
        }
        return res.json({
          status: true,
          message: 'User Updated',
          user: user
        });
      });
    }
  });
};
