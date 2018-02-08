'use strict';

// dependencies
var MongoClient = require('mongodb').MongoClient;
const Table = require('../models/table');
const express = require('express');
const FMAS = require('../configs/fileManipulationAndSaving')
const config = require('../configs/database');


exports.allTables = function (req, res) {

  console.log(req.body);
  
  
  Table.
  find({$text:{$search:req.body.search}})
    .limit(req.body.limit)
    .skip(req.body.page * req.body.limit)
    .sort(req.body.sort)
    .exec((err, tables) => {
      if (err) {
        return res.json({
          error: true,
          message: err.message,
          Info: err
        });
      }
      Table.collection.count((err, count) => {
        if (err) {
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }
        return res.json({
          success: true,
          message: 'Tables',
          tables: tables,
          total: count
        });
      });
    });

}

exports.createTable = function (req, res) {

  console.log(req.body);

  const table = new Table(req.body);
  table.save((err) => {
    if (err) {
      return res.json({
        error: true,
        message: err.message,
        Info: err
      });
    }
    MongoClient.connect(config.url, function (err, db) {
      if (err) throw err;
      var dbo = db.db(config.databaseName);
      dbo.createCollection(req.body.tableName, function (err, response) {
        if (err) throw err;
        return res.json({
          success: true,
          message: 'Table Created'
        });
        db.close();
      });
    });
  });
}

exports.updateTable = function (req, res) {

  console.log(req.body);

  Table.findOne({
    '_id': req.params.id
  }, (err, table) => {
    if (err) {
      return res.json({
        error: true,
        message: err.message,
        Info: err
      });
    }

    Table.findByIdAndUpdate(table._id, req.body, (err, table) => {
      if (err) {
        console.log(err)
        return res.json({
          error: true,
          message: err.message,
          Info: err
        });
      }
      return res.json({
        success: true,
        message: 'Table Updated',
        table: table
      });
    });

  });
}


exports.insert = function (req, res) {

  console.log(req.body);

  MongoClient.connect(config.url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {
      name: "Company Inc",
      address: "Highway 37"
    };
    dbo.collection(req.body.tableName).insertOne(req.body.data, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

}
