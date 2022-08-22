const Product = require("../models/Product")

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