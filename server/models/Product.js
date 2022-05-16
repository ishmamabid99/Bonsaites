const mongoose = require('mongoose');


const producSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    initialSupply: {
        type: Number,
        required: true
    },
    leftSupply: {
        type: Number,
        required: true
    },
    ownwer: {
        type: String,
        required: true
    }
})