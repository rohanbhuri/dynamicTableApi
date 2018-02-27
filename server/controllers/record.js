'use strict';

// dependencies
var MongoClient = require('mongodb').MongoClient;
const Table = require('../models/table');
const express = require('express');
const FMAS = require('../configs/fileManipulationAndSaving')
const config = require('../configs/database');
const json2csv = require('json2csv');
const csvtojson = require('csvtojson')
const mongoose = require('mongoose');
var Schema = mongoose.Schema;






exports.listRecords = function (req, res) {
  console.log(req.body);
  if (req.body.search) {
    Table
      .find({
        'tableName': {
          $regex: new RegExp("^" + req.body.search.toLowerCase(), "i")
        }
      })
      .lean()
      .populate('createdBy', 'email username')
      .populate('changedBy', 'email username')
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
        Table.find({
          $text: {
            $search: req.body.search
          }
        }).count((err, count) => {
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
  } else {
    Table
      .find({})
      .lean()
      .populate('createdBy', 'email username')
      .populate('changedBy', 'email username')
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
}



exports.createRecords = function (req, res) {
  //   console.log(req.body);
  Table.findOne({
      '_id': req.body.id
    })
    .exec((err, table) => {
      if (err) {
        return res.json({
          error: true,
          message: err.message,
          Info: err
        });
      }
      //   console.log(table._schema);

      let schemaObject = {};
      table._schema.forEach(element => {
        schemaObject[element.fieldName] = {
          type: element.type,
          unique: element.unique,
          required: element.null == false ? true : false
        }
      });
      const someSchema = new mongoose.Schema(schemaObject);

      console.log(schemaObject);
      var someData = new someSchema(req.body);
      someData.save((err) => {
        if (err) {
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }
        return res.json({
          success: true,
          message: 'Attempt succesfull'
        });
      });

    });
}
