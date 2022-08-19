const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
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
    owner: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;