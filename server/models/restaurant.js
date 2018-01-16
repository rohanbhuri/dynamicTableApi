'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Restaurant name is required']
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  detail: {
    type: String
  },
  sampleMenu: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  bookingPrize: {
    type: Number
  },
  partySize: {
    type: Number
  },
  dietaryRestrictions: {
    allowed: [{
      type: String
    }],
    notAllowed: [{
      type: String
    }]
  },
  bookingTime: {
    to: {
      type: Date
    },
    from: {
      type: Date
    }
  },
  contact: {
    phone: {
      type: Number
    },
    email: {
      type: String
    }
  },
  address: {
    state: {
      type: String
    },
    area: {
      type: String
    },
    location: {
      type: String
    }
  },
  location: {
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    }
  }
});

module.exports = mongoose.model('Restaurant', schema);
