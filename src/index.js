const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const uriDB = 'mongodb://eudalio:eudalio123@ds143071.mlab.com:43071/goweek-backend';
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(uriDB, {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
})
app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log("Server started on port 3000");
})