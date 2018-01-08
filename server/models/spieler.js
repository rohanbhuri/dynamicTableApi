'use strict';

const mongoose = require('mongoose');
// const User = require('../models/user');
var Schema = mongoose.Schema;

const schema = new mongoose.Schema({

    profileImage: { type: String },
    general: {
        firstName: { type: String },
        lastName: { type: String },
        gender: { type: String },
        birthDate: { type: String },
        nationality: { type: String },
        groups: [{ type: String }],
    },
    contact: {
        email: { type: String },
        phone: { type: Number },
        billingContact: { type: String },
    },
    contactPersons: [{
        firstName: { type: String },
        lastName: { type: String },
        email: { type: String },
        phone: { type: Number },
        country: { type: String },
        place: { type: String },
        billingContact: { type: String },
        postcode: { type: String },
        street: { type: String },
        contactType: { type: String },
        comments: { type: String },
        job: { type: String },
    }],
    address: {
        country: { type: String },
        city: { type: String },
        postcode: { type: String },
        street: { type: String },
    },
    healthInformation: {
        allergiesAndIntolerances: { type: String },
        commentOnHealth: { type: String },
    },
    memberInformation: {
        memberSince: { type: String },
        hasFoundUsAbout: { type: String },
        associationInternalId: { type: String },
        invoiceId: { type: String },
        billComment: { type: String },
        PlayersOrHisHerParentsCanHelpWith: { type: String },
        otherComments: { type: String },
        otherSports: { type: String }
    },
    personalInformation: {
        JSNumber: { type: String },
        school: { type: String },
        company: { type: String },
        job: { type: String },
        sportingPast: { type: String },
        Strengthen: { type: String },
        weaknesses: { type: String },
        trainingGoal: { type: String },
        others: { type: String }
    }

});

module.exports = mongoose.model('Spieler', schema);
