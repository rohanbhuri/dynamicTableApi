'use strict';

// dependencies
const express = require('express');
const Spieler = require('../models/spieler');
var mongoose = require('mongoose');
const FMAS = require('../configs/fileManipulationAndSaving')


exports.allSpielers = function (req, res) {
  Spieler.find().sort({
      createdAt: -1
    })
    .exec((err, spieler) => {
      if (err) {
        return res.json({
          status: false,
          message: err
        });
      }

      return res.json({
        status: true,
        message: 'All Spielers',
        spieler: spieler
      });
    });
}

exports.spieler = function (req, res) {
  Spieler.findOne({
      _id: req.params.id
    }).sort({
      createdAt: -1
    })
    .exec((err, spieler) => {
      if (err) {
        return res.json({
          status: false,
          message: err
        });
      }

      return res.json({
        status: true,
        message: 'Single Spieler',
        spieler: spieler
      });
    });
}

exports.addSpieler = function (req, res) {
  if (res.body.profileImage) {
    FMAS.savingImageAndCreatingNames(req, res, (imagePath) => {
      const spieler = new Spieler({
        profileImage: imagePath,
        general: req.body.general,
        contact: req.body.contact,
        contactPersons: req.body.contactPersons,
        address: req.body.address,
        healthInformation: req.body.healthInformation,
        memberInformation: req.body.memberInformation,
        personalInformation: req.body.personalInformation
      });
      spieler.save((err) => {
        if (err) {
          return res.json({
            status: false,
            message: err
          });
        }
        return res.json({
          status: true,
          message: 'Spieler Added'
        });
      });
    })
  }
}

exports.addMultipleSpieler = function (req, res) {
  let arrayLength = 1;
  req.body.forEach(function (element) {
    // console.log(element);
    const spieler = new Spieler({
      general: element.general,
      contact: element.contact,
    });
    spieler.save((err) => {
      if (err) {
        return res.json({
          status: false,
          message: err
        });
      }
      if (req.body.length == arrayLength) {
        return res.json({
          status: true,
          message: 'Spielers Added'
        });
      }
      arrayLength++
    });
  });
}

exports.updateSpieler = function (req, res) {
  Spieler.findOne({
    '_id': req.params.id
  }, (err, spieler) => {
    if (err) {
      return res.json({
        status: false,
        message: err
      });
    }
    if (spieler) {
      FMAS.updateOldAndExistingImage(req, res, spieler.profileImage, (imagePath) => {
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
        // console.log("spialer", spieler)
        Spieler.findByIdAndUpdate(spieler._id, data, (err, spieler) => {
          if (err) {
            console.log(err)
            return res.json({
              status: false,
              message: err
            });
          }
          return res.json({
            status: true,
            message: 'Spieler Updated',
            spieler: spieler
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
      message: 'Spieler Deleted'
    });
  });
};
