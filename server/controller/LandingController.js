const Product = require("../models/Product")
const Wishlist = require('../models/Wishlist')
module.exports.getLandingData = async (req, res) => {
    try {
        const data = await Product.find({});
        console.log(data)
        if (data.length >= 1) {
            const ret = data.filter((datas) => {
                return datas.state
            })
            console.log(ret)
            res.status(200).json(ret);
        }
        else {
            res.status(203).json("Nothing to show")
        }
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.addToWishList = async (req, res) => {
    try {

        const check = await Wishlist.find(req.body.data);
        const prod = await Product.findById(req.body.data.prod_id);
        console.log(check)
        console.log(prod)

        if ((!check || check.length === 0) && prod) {
            const data = await Wishlist.create({
                ...req.body.data,
                name: prod.name,
                price: prod.price,
                type: prod.type,
                initialSupply: prod.initialSupply,
                leftSupply: prod.leftSupply,
                owner: prod.owner,
                img: prod.img,
                desc: prod.desc

            })
            console.log(data)
            if (data) {
                res.status(200).json(data)
            }
            else {
                res.status(203).json(false)
            }
        }
        else {
            console.log('wie')
            res.status(205).json("Already exists")
        }
    }
    catch (err) {
        console.log(err)
    }
}
module.exports.getWishlist = async (req, res) => {
    try {
        const data = await Wishlist.find({ ref_id: req.params._id })
        console.log(data)
        if (data) {
            // try {
            //     let retData = [];
            //     const promises = data.forEach(async (ele) => {
            //         console.log(ele)
            //         const temp = await Product.findById(ele.prod_id);
            //         await Promise.all(temp)
            //         console.log(temp)
            //         retData.push(temp);
            //     });
            //     await Promise.all([promises, data]);
            //     console.log(retData)
            //     res.status(200).json(retData)
            // }
            // catch (err) {
            //     console.log(err)
            // }
            res.status(200).json(data)
        }
        else {
            res.status(203).json("Nothing to show")
        }
    }
    catch (err) {
        console.log(err)
    }
}