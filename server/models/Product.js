const mongoose = require('mongoose');


const producSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
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
    },
    img: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('product', producSchema);

module.exports = Product;