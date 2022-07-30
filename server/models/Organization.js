const mongoose = require('mongoose'),
    Schema = mongoose.Schema;


const organizationSchema = new mongoose.Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    bank:{
        type:Boolean,
        required:true,
        default:false
    }
    ,
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
    token: {
        type: String
    }
})
const Organization = mongoose.model('organization', organizationSchema);

module.exports = Organization;