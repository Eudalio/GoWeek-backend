const express = require('express')
const mongoose = require('mongoose')
const uriDB = 'mongodb://eudalio:eudalio123@ds143071.mlab.com:43071/goweek-backend';
const app = express();

mongoose.connect(uriDB, {
    useNewUrlParser: true
});

app.use(express.json())
app.use(require('./routes'));

app.listen(3000, () => {
    console.log("Server started on port 3000");
})