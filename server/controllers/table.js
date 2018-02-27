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
  if (!req.body.tableName || req.body.tableName.trim().toLowerCase() == '') {
    return res.json({
      error: true,
      message: "Table Name Required",
    });
  }
  Table.find({
    tableName: req.body.tableName.trim().toLowerCase()
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
      let validationError = false;
      let validationError2 = false;
      let validationError3 = false;
      table._schema.forEach((element1, key1) => {
        table._schema.forEach((element2, key2) => {
          if (key1 !== key2) {
            if (element1.fieldName.trim().toLowerCase() === element2.fieldName.trim().toLowerCase()) {
              validationError = true;
            }
          }
          if (!element2.fieldName || element2.fieldName.trim().toLowerCase() == '') {
            validationError2 = true;
          }
          if (!element2.type || element2.type.trim().toLowerCase() == '') {
            validationError3 = true;
          }
          console.log(key1 + 1, key2 + 1, req.body._schema.length)
          if ((key1 + 1) === req.body._schema.length && (key2 + 1) === req.body._schema.length) {
            if (validationError) {
              return res.json({
                error: true,
                message: "Duplicate Field Name",
              });
            }
            if (validationError2) {
              return res.json({
                error: true,
                message: "Empty Field Name Not Allowed",
              });
            }
            if (validationError3) {
              return res.json({
                error: true,
                message: "Empty Type Field Not Allowed",
              });
            } else {
              proceed()
            }
          }
        });
      });

      function proceed() {
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

    }
  });
}

exports.updateTable = function (req, res) {
  let validationError = false;
  let validationError2 = false;
  let validationError3 = false;
  req.body._schema.forEach((element1, key1) => {
    req.body._schema.forEach((element2, key2) => {
      if (key1 !== key2) {
        if (element1.fieldName.trim().toLowerCase() === element2.fieldName.trim().toLowerCase()) {
          validationError = true;
        }
        if (!element2.fieldName || element2.fieldName.trim().toLowerCase() == '') {
          validationError2 = true;
        }
        if (!element2.type || element2.type.trim().toLowerCase() == '') {
          validationError3 = true;
        }
      }
      console.log(key1 + 1, key2 + 1, req.body._schema.length)
      if ((key1 + 1) === req.body._schema.length && (key2 + 1) === req.body._schema.length) {
        if (validationError) {
          return res.json({
            error: true,
            message: "Duplicate Field Name",
          });
        }
        if (validationError2) {
          return res.json({
            error: true,
            message: "Empty Field Name Not Allowed",
          });
        }
        if (validationError3) {
          return res.json({
            error: true,
            message: "Empty Type Field Not Allowed",
          });
        } else {
          proceed()
        }
      }
    });
  });

  function proceed() {
    Table.findOne({
      '_id': req.body.id
    }, (err, table) => {
      if (err) {
        return res.json({
          error: true,
          message: err.message,
          Info: err
        });
      } else
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
        'tableName': {
          $regex: new RegExp("^" + req.body.search.toLowerCase(), "i")
        }
      })
      .sort(req.body.sort)
      .populate('createdBy', 'username')
      .populate('changedBy', 'username')
      .exec((err, tables) => {
        if (err) {
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }

        let newTable = [];
        tables.forEach((element, key) => {
          newTable.push({
            tableName: element.tableName,
            tableDescription: element.tableDescription,
            createdOn: element.createdOn,
            createdBy: element.createdBy == null || undefined ? undefined : element.createdBy.username,
            changedOn: element.changedOn,
            changedBy: element.changedBy == null || undefined ? undefined : element.changedBy.username,
          })
          if (key + 1 === tables.length) {
            var fields = ['tableName', 'tableDescription', 'createdOn', 'createdBy', 'changedOn', 'changedBy'];
            try {
              var result = json2csv({
                data: newTable,
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
          }
        });

      });
  } else {
    Table
      .find({})
      .sort(req.body.sort)
      .populate('createdBy', 'username')
      .populate('changedBy', 'username')
      .exec((err, tables) => {
        if (err) {
          return res.json({
            error: true,
            message: err.message,
            Info: err
          });
        }

        let newTable = [];
        tables.forEach((element, key) => {
          newTable.push({
            tableName: element.tableName,
            tableDescription: element.tableDescription,
            createdOn: element.createdOn,
            createdBy: element.createdBy == null || undefined ? undefined : element.createdBy.username,
            changedOn: element.changedOn,
            changedBy: element.changedBy == null || undefined ? undefined : element.changedBy.username,
          })
          if (key + 1 === tables.length) {

            var fields = ['tableName', 'tableDescription', 'createdOn', 'createdBy', 'changedOn', 'changedBy'];
            try {
              var result = json2csv({
                data: newTable,
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
          }
        });


      });
  }
};

// exports.uploadTableList = function (req, res) {
//   const csv = require('csvtojson')
//   let error = undefined;
//   csvtojson()
//     .fromString(req.body.csv)
//     .on('csv', (csvRow) => {
//       console.log(csvRow.length);
//       if (csvRow.length !== 6) {
//         error = {
//           message: 'Not A Valid CSV File'
//         }
//       } else {
//         const table = new Table({
//           tableName: csvRow[0],
//           tableDescription: csvRow[1],
//           createdOn: csvRow[2],
//           createdBy: csvRow[3] == '' ? undefined : csvRow[3],
//           changedOn: csvRow[4],
//           changedBy: csvRow[5] == '' ? undefined : csvRow[5],
//         });
//         console.log(table);
//         Table.find({
//           tableName: table.tableName
//         }).exec((err, tables) => {
//           if (err) {
//             error = err;
//           }
//           if (tables.length > 0) {
//             // "Table Already Exist"
//           } else {
//             table.save((err) => {
//               if (err) {
//                 error = err;
//               }
//               MongoClient.connect(config.url, function (err, db) {
//                 if (err) throw err;
//                 var dbo = db.db(config.databaseName);
//                 dbo.createCollection(table.tableName, function (err, response) {
//                   if (err) throw err;
//                   db.close();
//                 });
//               });
//             });
//           }
//         });
//       }
//     })
//     .on('done', () => {
//       if (error) {
//         return res.json({
//           error: true,
//           message: error.message
//         });
//       }
//       return res.json({
//         success: true,
//         message: 'Tables Uploaded'
//       });
//     })
// };


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
      var fields = ['fieldName', 'type', 'length', 'unique', 'null', 'fieldDescription'];

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
      csvtojson()
        .fromString(req.body.csv)
        .on('csv', (csvRow) => {
          if (csvRow.length !== 6) {
            error = {
              message: 'Not A Valid CSV File'
            }
          } else {
            schema.push({
              fieldName: csvRow[0],
              type: csvRow[1] == '' ? undefined : csvRow[1],
              length: csvRow[2] == '' ? undefined : csvRow[2],
              unique: csvRow[3],
              null: csvRow[4],
              fieldDescription: csvRow[5] == '' ? undefined : csvRow[5]
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
          Table.findOneAndUpdate(req.body._id, {
            _schema: schema
          }, (err, table) => {
            if (err) {
              console.log(err);
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
