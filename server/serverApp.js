require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Routes = require('./Routes/AppRouter')
const DB = process.env.MONGO_URL
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/', Routes)
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
