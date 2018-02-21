'use strict';

// dependencies
var MongoClient = require('mongodb').MongoClient;
const Table = require('../models/table');
const express = require('express');
const FMAS = require('../configs/fileManipulationAndSaving')
const config = require('../configs/database');
const json2csv = require('json2csv');
const csvtojson = require('csvtojson')



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
        // tables.forEach(element => {
        //   console.log(typeof element.keys)
        // });
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

exports.uploadTableList = function (req, res) {
  const csv = require('csvtojson')
  let error = undefined;
  csvtojson()
    .fromString(req.body.csv)
    .on('csv', (csvRow) => {
      console.log(csvRow.length);
      if (csvRow.length !== 6) {
        error = {
          message: 'Not A Valid CSV File'
        }
      } else {
        const table = new Table({
          tableName: csvRow[0],
          tableDescription: csvRow[1],
          createdOn: csvRow[2],
          createdBy: csvRow[3] == '' ? undefined : csvRow[3],
          changedOn: csvRow[4],
          changedBy: csvRow[5] == '' ? undefined : csvRow[5],
        });
        console.log(table);
        Table.find({
          tableName: table.tableName
        }).exec((err, tables) => {
          if (err) {
            error = err;
          }
          if (tables.length > 0) {
            // "Table Already Exist"
          } else {
            table.save((err) => {
              if (err) {
                error = err;
              }
              MongoClient.connect(config.url, function (err, db) {
                if (err) throw err;
                var dbo = db.db(config.databaseName);
                dbo.createCollection(table.tableName, function (err, response) {
                  if (err) throw err;
                  db.close();
                });
              });
            });
          }
        });
      }
    })
    .on('done', () => {
      if (error) {
        return res.json({
          error: true,
          message: error.message
        });
      }
      return res.json({
        success: true,
        message: 'Tables Uploaded'
      });
    })
};


exports.downloadTableSchema = function (req, res) {
  console.log(req.body);
  Table
    .findOne({
      '_id': req.body.id
    })
    .exec((err, tables) => {
      if (err) {
        return res.json({
          error: true,
          message: err.message,
          Info: err
        });
      }
      var fields = ['fieldName', 'type', 'unique', 'null', 'fieldDescription'];

      try {
        var result = json2csv({
          data: tables._schema,
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
};

exports.uploadTableSchema = function (req, res) {
  console.log(req.body)
  const csv = require('csvtojson')
  let error = undefined;
  let schema = [];
  Table
    .findOne({
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
      schema = table._schema;
      csvtojson()
        .fromString(req.body.csv)
        .on('csv', (csvRow) => {
          if (csvRow.length !== 5) {
            error = {
              message: 'Not A Valid CSV File'
            }
          } else {
            schema.push({
              fieldName: csvRow[0],
              type: csvRow[1] == '' ? undefined : csvRow[1],
              unique: csvRow[2],
              null: csvRow[3],
              fieldDescription: csvRow[4] == '' ? undefined : csvRow[4]
            });
          }
        })
        .on('done', () => {
          if (error) {
            return res.json({
              error: true,
              message: error.message
            });
          }
          table._schema = schema
          console.log(table);
          Table.findOneAndUpdate(req.body._id, table, (err, table) => {
            if (err) {
              return res.json({
                error: true,
                message: err.message,
                Info: err
              });
            } else {
              return res.json({
                success: true,
                message: 'Tables Uploaded'
              });
            }
          })
        })
    });
};
