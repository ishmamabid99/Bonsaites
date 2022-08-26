const Card = require("../models/Card")
const User = require("../models/User")
const bcrypt = require('bcrypt')
const Organization = require("../models/Organization")
const jwt = require('jsonwebtoken')
const Transaction = require("../models/Transaction")
module.exports.addCard = async (req, res) => {
    try {
        const data = req.body || req.body.data
        const secret = (await bcrypt.hash(data.secret, 10)).toString();
        const CVV = (await bcrypt.hash(data.cvv, 10)).toString();
        const card = await Card.create({
            ref_id: req.user.user_id,
            secret: secret,
            account_no: data.card_number,
            CVV,
            MMYY: data.exp_mm,
            balance: 100000
        });

        if (card) {
            let ret;
            if (req.user.user_role === "REGULAR") {
                ret = await User.findOne({ _id: req.user.user_id });
            }
            else if (req.user.user_role === "ORG") {
                ret = await Organization.findOneAndUpdate({ _id: req.user.user_id });
            }
            ret.bank = true;
            const user = await ret.save();
            if (user.bank === true) {
                const token = jwt.sign({
                    user_id: user._id,
                    user_email: user.email,
                    user_phone: user.phone,
                    user_bank: user.bank,
                    user_role: req.user.user_role,
                }, process.env.TOKEN_KEY, {
                    expiresIn: '2h'
                })
                console.log(token)
                res.status(200).send(token)
            }


        }
    }
    catch (err) {
        console.log(err)
    }
}

module.exports.handleCheckOut = async (req, res) => {
    try {
        const { from, to, amount, type, quantity, prod_id } = req.body.data;
        console.log(prod_id)
        const transaction = await Transaction.create({
            from: from,
            to: to,
            amount,
            type,
            state: 0,
            quantity,
            prod_id
        });
        const card = await Card.find({ ref_id: from });

        card[0].balance = parseInt(card[0].balance) - parseInt(amount);
        await card[0].save();
        Promise.all([card, transaction]).then(() => {
            res.status(200).json(transaction)
        })
    }
    catch (err) {
        console.log(err)
    }
}
// ref_id: {
//     type: String,
//     required: true,
// },
// secret: {
//     type: String,
//     required: true
// },
// account_no: {
//     type: String,
//     required: true
// },
// CVV: {
//     type: String,
//     required: true,
//     maxLength: 6
// },
// MMYY: {
//     type: String,
//     required: true
// },
// balance: {
//     type: Number,
//     required: true
// }


// card_number: "111-222-333-444"
// confirm_secret: "12345"
// cvv: "12345"
// exp_mm: "2023-06"
// name_on_card: "wie"
// secret: "12345