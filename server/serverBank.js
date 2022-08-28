require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Routes = require('./Routes/BankRouter')
const DB = process.env.MONGO_URL
const app = express();
const PORT = process.env.PORTBANK || 9090;

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/bank/', Routes)
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(app.listen(PORT, err => {
    if (!err) {
        console.log("Connection establised " + PORT)
    }
    else {
        console.log(`${err}`);
    }
}))
