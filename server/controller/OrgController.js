const User = require("../models/User")
const Product = require('../models/Product');
const Organization = require("../models/Organization");
const Card = require("../models/Card");
const Transaction = require("../models/Transaction");
module.exports.updateBank = async (req, res) => {
    try {
        const org = await Organization.findById(req.user.user_id);
        if (org.bank !== true) {
            org.bank = true;
        }
        const token = jwt.sign({
            user_id: org._id,
            user_email: org.email,
            user_phone: org.phone,
            user_bank: org.bank,
            user_role: "ORG"
        }, process.env.TOKEN_KEY, {
            expiresIn: '2h'
        })
        org.token = token;
        return res.status(200).json(org)
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.addProduct = async (req, res) => {
    try {
        const user_data = req.user;
        const name = req.body.name;
        const price = req.body.price;
        const initialSupply = req.body.quantity;
        const leftSupply = initialSupply;
        const owner = user_data.user_id;
        console.log(owner)
        const desc = req.body.desc;
        const type = req.body.type;
        const img = req.file.originalname;
        console.log('wie');
        const product = new Product();
        let check = await Product.findOne({ name: name });
        if (!check) {
            const product = await Product.create({
                name,
                price,
                initialSupply,
                leftSupply,
                owner,
                desc,
                type,
                img,
                state: false
            });
        }
        else {
            check.initialSupply = check.initialSupply + initialSupply;
            check.img = check.img;
            check.desc = desc;
            check.type = check.type;
            check.leftSupply = check.leftSupply + initialSupply;
            check.save()
        }
        const org = await Organization.findOne({ _id: owner });
        console.log('wie=' + org);
        org.products.push(product);
        org.save();
        await Organization.findOne({ _id: owner })
            .populate('products')
            .exec((err, org) => {
                console.log("Org" + org)//id pathaite hobe

            })
    }
    catch (err) {
        console.log(err)
    }

}
module.exports.getCardDetails = async (req, res) => {
    try {
        console.log(req.params._id)
        const ret = await Card.find({ ref_id: req.params._id });
        console.log(ret)
        if (ret) {
            console.log(ret[0].account_no)
            res.status(200).json(ret[0].account_no);
        }
        else {
            res.status(203).json("Card Not found")
        }
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.getMyProducts = async (req, res) => {
    try {
        const ret = await Product.find({ owner: req.params.id });
        if (ret.length !== 0) {
            res.status(200).json(ret);
        }
        else {
            res.status(203).json("Nothing to show")
        }
    }
    catch (err) {

    }
}
module.exports.getOrders = async (req, res) => {
    try {
        const arr = await Transaction.find({ to: req.params.id });
        let retArr = []
        console.log(arr.length)
        for (var i = 0; i < arr.length; i++) {
            console.log(arr[i].state)
            if (arr[i].state === 1 || arr[i].state == 2) {

                const data = await Product.findById(arr[i].prod_id);
                if (data) {
                    const { img, desc, initialSupply, leftSupply, owner, price, type, name } = data;
                    let newData = {
                        img, desc, initialSupply, leftSupply, owner, price, type, name,
                        prod_id: arr[i].prod_id,
                        amount: arr[i].amount,
                        order: arr[i].quantity,
                        payment: arr[i].type,
                        from: arr[i].from,
                        t_id: arr[i]._id

                    }
                    retArr.push(newData);
                }
            }
        }
        Promise.all([arr]).then(() => {
            res.status(200).json(retArr)
        })

    }
    catch (err) {
        console.log(err)
    }
}