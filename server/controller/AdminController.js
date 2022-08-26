const User = require("../models/User")
const jwt = require('jsonwebtoken');
const Organization = require("../models/Organization");
const Product = require("../models/Product");
const Transaction = require("../models/Transaction");
const Order = require("../models/Order");
module.exports.adminLogin = async (req, res) => {
    try {
        const { adminEmail, adminPass } = req.body
        if (adminEmail === process.env.ADMINEMAIL && adminPass === process.env.ADMINPASS) {
            const token = jwt.sign({
                user_email: adminEmail,
                user_role: "ADMIN",
            }, process.env.TOKEN_KEY, {
                expiresIn: '2h'
            })
            console.log(token)
            res.status(200).send(token);
        }
        else {
            res.status(202).send(false)
        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.getNoUsers = async (req, res) => {
    try {
        const users = await User.estimatedDocumentCount();
        const suppliers = await Organization.estimatedDocumentCount();
        const products = await Product.estimatedDocumentCount();
        let data = {
            users, suppliers, products
        }
        console.log(data)
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.getRequests = async (req, res) => {
    try {
        const data = await Product.find({});
        if (data.length >= 1) {
            const ret = data.filter((datas) => {
                return !datas.state
            })
            res.status(200).json(ret);
        }
        else {
            res.status(203).json("Nothing to show")
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports.getProductDetails = async (req, res) => {
    try {
        const ret = await Product.findById(req.params.id);
        if (res) {
            res.status(200).json(ret)
        }
        else {
            res.status(202).json("Nothing was found ")
        }

    }
    catch (err) {
        console.log(err)
    }
}
module.exports.updateProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.body.id, { state: true })
        res.status(200).json(true);
    }
    catch (err) {
        res.status(203).json(`${err}`)
        console.log(err)
    }
}
module.exports.deleteProduct = async (req, res) => {
    try {
        const doc = await Product.findByIdAndRemove(req.body.id);
        console.log(doc);
        if (doc) {
            res.status(200).json(true)
        }
    }
    catch (err) {
        res.status(203).json(`${err}`)
        console.log(err)
    }
}
module.exports.getTransactions = async (req, res) => {
    try {
        const ret = await Transaction.find({});
        if (ret) {
            res.status(200).json(ret)
        }
        else {
            res.status(203).json("Nothing to show")
        }
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.updateTransactionsDelivery = async (req, res) => {
    try {
        const id = req.body.data;
        console.log(req.body.data)
        const ret = await Transaction.findByIdAndUpdate(id, { state: 2 });
        if (ret) {
            res.status(200).json(true);
        }
        else {
            res.status(203).json(false)
        }
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.proceedToBank = async (req, res) => {
    try {
        const id = req.body.data;
        const ret = await Transaction.findByIdAndUpdate(id, { state: 1 });
        if (ret) {
            res.status(200).json(true);
        }
        else {
            res.status(203).json(false)
        }
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.postOrder = async (req, res) => {
    try {
        const ret = await Order.create({
            ...req.body.data
        })
        if (ret) {
            res.status(200).json(ret)
        }
        else {
            res.status(203).json("Hoy nai broooo....")
        }
    }
    catch (err) {
        console.log(err)
    }
}