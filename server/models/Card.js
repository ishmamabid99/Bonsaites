const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({

    ref_id: {
        type: String,
        required: true,
    },
    secret: {
        type: String,
        required: true
    },
    account_no: {
        type: String,
        required: true
    },
    CVV: {
        type: String,
        required: true,
        maxLength: 6
    },
    MM: {
        type: String,
        required: true
    },
    YY: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Card = mongoose.model('card', cardSchema)

module.exports = Card