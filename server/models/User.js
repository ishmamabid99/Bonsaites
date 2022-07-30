const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bank: {
        type: Boolean,
        required: true,
        default: false
    },
    token: {
        type: String
    }
})
const User = mongoose.model('user', userSchema);

module.exports = User;