const User = require("../models/User")
const Product = require('../models/Product');
const Organization = require("../models/Organization");
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
                img
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