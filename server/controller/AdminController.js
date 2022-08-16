const User = require("../models/User")
const jwt = require('jsonwebtoken');
const Organization = require("../models/Organization");
const Product = require("../models/Product");
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