const User = require("../models/User")

module.exports.addProduct = async (req, res) => {
    try {
        const user_data = req.user;
        const data = req.body.data;
        console.log(user_data);
        console.log(req.body.name);
        console.log(req.body.token);
    }
    catch (err) {
        console.log(err)
    }

}