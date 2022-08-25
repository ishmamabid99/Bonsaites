const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    ref_id: {
        type: String,
        required: true
    },
    prod_id: {
        type: String,
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
    },
})

const Wishlist = mongoose.model('wishlist', wishlistSchema);

module.exports = Wishlist;

