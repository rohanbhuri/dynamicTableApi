'use strict';

// dependencies
var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const FMAS = require('../configs/fileManipulationAndSaving')
const config = require('../configs/database');


exports.createTable = function (req, res) {

  MongoClient.connect(config.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(config.databaseName);
    dbo.createCollection("customers", function (err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });

}
