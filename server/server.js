require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT||8080;

app.listen(PORT,err=>{
    if (!err){
        console.log("Connection establised "+PORT)
    }
    else{
        console.log(`${err}`);
    }
})