'use strict';

// dependencies
var MongoClient = require('mongodb').MongoClient;
const Table = require('../models/table');
const express = require('express');
const FMAS = require('../configs/fileManipulationAndSaving')
const config = require('../configs/database');
const json2csv = require('json2csv');



exports.listTables = function (req, res) {
  console.log(req.body);
  if (req.body.search) {
    Table
      .find({
        $text: {
          $search: req.body.search
        }
      })
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

exports.readTable = function (req, res) {
  Table.findOne({
    _id: req.body.id
  }).exec((err, table) => {
    if (err) {
      return res.json({
        error: true,
        message: err.message,
        Info: err
      });
    }
    return res.json({
      success: true,
      message: 'Table Data',
      table: table
    });
  });
};

exports.createTable = function (req, res) {

  console.log(req.body);
  Table.find({
    tableName: req.body.tableName
  }).exec((err, tables) => {
    if (err) {
      return res.json({
        error: true,
        message: err.message,
        Info: err
      });
    }
    if (tables.length > 0) {
      return res.json({
        error: true,
        message: "Table Already Exist",
      });
    } else {
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
  });
}

exports.updateTable = function (req, res) {
  console.log(req.body);
  Table.findOne({
    '_id': req.body.id
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

exports.deleteTable = function (req, res) {
  console.log(req.body);
  Table.findOne({
    '_id': req.body.id
  }, (err, table) => {
    if (err) {
      return res.json({
        error: true,
        message: err.message,
        Info: err
      });
    }

    Table.findByIdAndRemove(table._id, req.body, (err) => {
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
        dbo.collection(table.tableName).drop(function (err, delOK) {
          if (err) {
            return res.json({
              error: true,
              message: err.message,
              Info: err
            });
          }
          if (delOK) {
            return res.json({
              success: true,
              message: 'Table Deleted',
            });
          }
          db.close();
        });
      });
    });
  });
}

exports.downloadTable = function (req, res) {
  console.log(req.body);
  Table.findOne({
    '_id': req.body.id
  }, (err, table) => {
    if (err) {
      return res.json({
        error: true,
        message: err.message,
        Info: err
      });
    }


    var fields = ['field1', 'field2', 'field3'];
    try {
      var result = json2csv({
        data: myData,
        fields: fields
      });
      console.log(result);
    } catch (err) {
      console.error(err);
      return res.json({
        error: true,
        message: err.message,
        Info: err
      });
    }



  })

};

exports.downloadTableList = function (req, res) {
  console.log(req.body);
  if (req.body.search) {
    Table
      .find({
        $text: {
          $search: req.body.search
        }
      })
      .sort(req.body.sort)
      .exec((err, tables) => {
        if (err) {
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }
        tables.forEach(element => {
          console.log(typeof element.keys)
        });
        var fields = ['tableName', 'tableDescription', 'createdOn', 'createdBy', 'changedOn', 'changedBy'];
        try {
          var result = json2csv({
            data: tables,
            fields: fields
          });
          return res.json({
            success: true,
            message: 'Table Downloaded',
            result: result
          });
        } catch (err) {
          console.error(err);
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }
      });
  } else {
    Table
      .find({})
      .sort(req.body.sort)
      .exec((err, tables) => {
        if (err) {
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }
        var fields = ['tableName', 'tableDescription', 'createdOn', 'createdBy', 'changedOn', 'changedBy'];
        try {
          var result = json2csv({
            data: tables,
            fields: fields
          });
          return res.json({
            success: true,
            message: 'Table Downloaded',
            result: result
          });
        } catch (err) {
          console.error(err);
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }
      });
  }
};
