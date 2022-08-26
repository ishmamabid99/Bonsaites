const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    state: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    prod_id: {
        type: String,
        required: true
    }

})

const Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;

