const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    prod_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
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
    }
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order