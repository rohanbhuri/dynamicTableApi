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
var assert = require('assert')






exports.listRecords = function (req, res) {
  console.log(req.body);

  // find Table
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

      var someTable = createModel(table)

      if (req.body.search) {
        let findQuery = [];
        table._schema.forEach(element => {
          let obj = {}
          obj[element.fieldName] = {
            $regex: new RegExp("^" + req.body.search, "i")
          }
          findQuery.push(obj)
        });
        someTable
          .find()
          .or(findQuery)
          .lean()
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
            someTable.find({
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
                records: tables,
                total: count
              });
            });
          });
      } else {
        someTable
          .find({})
          .lean()
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
            someTable.collection.count((err, count) => {
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
                records: tables,
                total: count
              });
            });
          });
      }


    });
}



exports.createRecords = function (req, res) {
  console.log(req.body.records);
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

      var someTable = createModel(table);

      let error = undefined;
      req.body.records.forEach((element, key) => {
        var someData = new someTable(element);
        someData.validate((err) => {
          if (err) {
            error = err;
          }
          if (req.body.records.length === (key + 1) && !error) {
            proceed();
          }
          if (req.body.records.length === (key + 1) && error) {
            return res.json({
              error: true,
              message: error.message,
              Info: error,
            });
          }
        });
      });

      function proceed() {
        let error2 = undefined;
        req.body.records.forEach((element, key) => {
          var someData = new someTable(element);
          someData.save((err) => {
            if (err) {
              error2 = err;
            }
            if (req.body.records.length === (key + 1) && !error2) {
              return res.json({
                success: true,
                message: 'Records Saved'
              });
            }
            if (req.body.records.length === (key + 1) && error2) {
              console.log(assert.ok(error2))
              return res.json({
                error: true,
                message: error2.message,
                Info: error2,
              });
            }
          });
        });
      }
    });
}




exports.deleteRecords = function (req, res) {
  console.log(req.body);
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
      var someTable = createModel(table);
      let error = undefined;
      req.body.delete.forEach((element, key) => {
        someTable.findByIdAndRemove(element, (err) => {
          if (err) {
            error = err;
          }
          if (req.body.delete.length === (key + 1) && !error) {
            return res.json({
              success: true,
              message: 'Records Deleted'
            });
          }
          if (req.body.delete.length === (key + 1) && error) {
            console.log(assert.ok(error2))
            return res.json({
              error: true,
              message: error.message,
              Info: error,
            });
          }
        });
      });
    });
}




function createModel(table) {
  // create Schema
  let schemaObject = {
    createdAt: {
      type: Date,
      default: Date.now
    },
  };
  table._schema.forEach(element => {
    schemaObject[element.fieldName] = {
      type: element.type,
      text: true,
      unique: element.unique,
      required: [element.null == false ? true : false, element.fieldName + ' field required'],
      max: [element.length, element.fieldName + ' field length exceeded']
    }
  });
  const someSchema = new mongoose.Schema(schemaObject);
  return mongoose.models[table.tableName] || mongoose.model(table.tableName, someSchema);
}
