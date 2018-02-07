'use strict';

var MongoClient = require('mongodb').MongoClient;

exports.databaseName = 'dynamicTableApi';

exports.url = "mongodb://localhost:27017/" + databaseName;


MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database Connected!");
  db.close();
});
