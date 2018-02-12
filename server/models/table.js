'use strict';

const mongoose = require('mongoose');
const User = require('../models/user');
var Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  tableName: {
    type: String
  },
  tableDescription: {
    type: String
  },
  _schema: [{
    fieldName: {
      type: String
    },
    type: {
      type: String
    },
    length: {
      type: Number
    },
    unique: {
      type: Boolean 
    },
    null: {
      type: Boolean 
    },
    fieldDescription: {
      type: String
    }
  }],
  createdOn: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    // type: Schema.Types.ObjectId,
    // ref: 'User'
    type: String
  },
  changedOn: {
    type: Date,
    default: Date.now
  },
  changedBy: {
    // type: Schema.Types.ObjectId,
    // ref: 'User'
    type: String
  },
});

schema.index({
  '$**': 'text'
});

module.exports = mongoose.model('Table', schema);
