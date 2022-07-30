require('dotenv').config();
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Organization = require('../models/Organization');

module.exports.Register = async (req, res) => {
    try {
        const data = req.body.data;
        console.log(data)
        if (!(data.email && data.password && data.name && data.phone)) {
            res.status(400).send("All input is required")
        }
        const oldUser = await User.findOne({ email: data.email })
        if (oldUser) {
            return res.status(409).send("User Already exists , Please Login")
        }
        data.password = await bcrypt.hash(data.password, 10);

        const user = await User.create({ ...data });
        console.log(user)
        const token = jwt.sign({
            user_id: user._id,
            user_email: user.email,
            user_phone: user.phone,
            user_role: "REGULAR",
            user_bank: user.bank,
        }, process.env.TOKEN_KEY, {
            expiresIn: '2h'
        })
        user.token = token;
        res.status(201).json(user)
    }
    catch (err) {
        res.status(404).json(`${err}`)
        console.log(err)
    }
}
module.exports.OrgRegistration = async (req, res) => {
    try {
        const data = req.body.data;
        if (!(data.email && data.password && data.name && data.phone)) {
            console.log('wie')
            res.status(400).send("All input is required")
        }
        const oldUser = await Organization.findOne({ email: data.email })
        if (oldUser) {
            console.log("plup")
            return res.status(409).send("User Already exists , Please Login")
        }
        data.password = await bcrypt.hash(data.password, 10);

        const user = await Organization.create({ ...data });
        console.log("user")
        const token = jwt.sign({
            user_id: user._id,
            user_email: user.email,
            user_phone: user.phone,
            user_bank: user.bank,
            user_role: "ORG"
        }, process.env.TOKEN_KEY, {
            expiresIn: '2h'
        })
        user.token = token;
        res.status(201).json(user)

    }
    catch (err) {
        console.log(err)
    }
}
module.exports.Login = async (req, res) => {
    try {
        const { email, password, user_role } = req.body.data;
        if (!(email && password)) {
            res.status(400).send("All input is required")
        }
        console.log(user_role)
        if (user_role === "REGULAR") {
            const user = await User.findOne({ email });
            const check = await bcrypt.compare(password, user.password);
            if (user && check) {
                const token = jwt.sign({
                    user_id: user._id,
                    user_email: user.email,
                    user_phone: user.phone,
                    user_bank: user.bank,
                    user_role: "REGULAR"
                }, process.env.TOKEN_KEY, {
                    expiresIn: '2h'
                })
                user.token = token;
                console.log(user)
                res.status(200).json(user);
            }
            else {
                res.status(400).send('Invalid Credentials')
            }
        }
        else if (user_role === "ORG") {
            console.log('wie')
            const user = await Organization.findOne({ email });
            const check = await bcrypt.compare(password, user.password);
            if (user && check) {
                const token = jwt.sign({
                    user_id: user._id,
                    user_email: user.email,
                    user_phone: user.phone,
                    user_bank: user.bank,
                    user_role: "ORG"
                }, process.env.TOKEN_KEY, {
                    expiresIn: '2h'
                });
                user.token = token;
                console.log(user);
                res.status(200).json(user)

            }
            else {
                console.log('hoynai')
                res.status(400).send("Invalid Credentials")
            }
        }

    }
    catch (err) {
        console.log(err)
        return res.status(404).json(`${err}`)
    }

}