'use strict';

// dependencies
const express = require('express');
const Restaurant = require('../models/restaurant');
var mongoose = require('mongoose');
const FMAS = require('../configs/fileManipulationAndSaving')


exports.allRestaurant = function (req, res) {
  Restaurant.find().sort({
      createdAt: -1
    })
    .exec((err, restaurant) => {
      if (err) {
        return res.json({
          status: false,
          message: err
        });
      }

      return res.json({
        status: true,
        message: 'All Restaurants',
        restaurant: restaurant
      });
    });
}

exports.restaurant = function (req, res) {
  Restaurant.findOne({
      _id: req.params.id
    }).sort({
      createdAt: -1
    })
    .exec((err, restaurant) => {
      if (err) {
        return res.json({
          status: false,
          message: err
        });
      }

      return res.json({
        status: true,
        message: 'Single Restaurant',
        restaurant: restaurant
      });
    });
}

exports.addRestaurant = function (req, res) {
  if (res.body.profileImage) {
    FMAS.savingImageAndCreatingNames(req, res, (imagePath) => {
      const restaurant = new Restaurant(req.body);
      restaurant.image = imagePath;
      restaurant.save((err) => {
        if (err) {
          return res.json({
            status: false,
            message: err
          });
        }
        return res.json({
          status: true, 
          message: 'Restaurant Added'
        });
      });
    })
  }
}

exports.updateRestaurant = function (req, res) {
  Restaurant.findOne({
    '_id': req.params.id
  }, (err, restaurant) => {
    if (err) {
      return res.json({
        status: false,
        message: err
      });
    }
    if (restaurant) {
      FMAS.updateOldAndExistingImage(req, res, restaurant.profileImage, (imagePath) => {
        console.log("fmas working");
        const data = {
          profileImage: imagePath,
        }
        if (req.body.general) {
          data.general = req.body.general;
        }
        if (req.body.contact) {
          data.contact = req.body.contact;
        }
        if (req.body.contactPersons) {
          data.contactPersons = req.body.contactPersons;
        }
        if (req.body.address) {
          data.address = req.body.address;
        }
        if (req.body.contactPersons) {
          data.contactPersons = req.body.contactPersons;
        }
        if (req.body.healthInformation) {
          data.healthInformation = req.body.healthInformation;
        }
        if (req.body.healthInformation) {
          data.healthInformation = req.body.healthInformation;
        }
        if (req.body.memberInformation) {
          data.memberInformation = req.body.memberInformation;
        }
        if (req.body.personalInformation) {
          data.personalInformation = req.body.personalInformation;
        }

        // console.log("data", data)
        // console.log("spialer", restaurant)
        Restaurant.findByIdAndUpdate(restaurant._id, data, (err, restaurant) => {
          if (err) {
            console.log(err)
            return res.json({
              status: false,
              message: err
            });
          }
          return res.json({
            status: true,
            message: 'Restaurant Updated',
            restaurant: restaurant
          });
        });
      });
    }
  });
};

exports.deleteTask = function (req, res) {
  Todo.remove({
    _id: req.params.id
  }, (err) => {
    if (err) {
      return res.json({
        status: false,
        message: err
      });
    }
    return res.json({
      status: true,
      message: 'Restaurant Deleted'
    });
  });
};
