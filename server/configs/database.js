'use strict';

const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var config = require('./database')

exports.databaseName = 'dynamictableapi';

exports.url = "mongodb://root:root@ds247688.mlab.com:47688/" + config.databaseName;

// MongoClient.connect(config.url, function (err, db) {
//   if (err) throw err;
//   console.log("Database Connected!");
//   db.close();
// });

// connect to the database
mongoose.connect(config.url);

// get notified if connection was
// successful or not
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.on('open', () => {
  console.log(`Connected to the ${config.databaseName} database`);
});
