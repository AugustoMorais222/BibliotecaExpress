require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const homeRoute = require('./routes/homeRoute');

/*
mongoose.connect(process.env.CONNECTIONSTRING)  
    .then(() =>{
        console.log("Conectado ao banco");
        app.emit('conectado')
    })
    .catch(e => console.log(e));
*/
app.use("/",homeRoute);
module.exports = app;