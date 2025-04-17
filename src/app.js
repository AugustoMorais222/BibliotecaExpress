require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose')
const path = require('path');
const homeRoute = require('./routes/homeRoute');
const usuarioRoute = require('./routes/usuarioRoute');

mongoose.connect(process.env.CONNECTIONSTRING)  
    .then(() =>{
        console.log("Conectado ao banco");
        app.emit('conectado')
    })
    .catch(e => console.log(e));

app.use(express.json());
app.use(cors());
app.use("/",homeRoute);
app.use("/usuario", usuarioRoute);
module.exports = app;