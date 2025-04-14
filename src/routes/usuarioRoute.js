const express = require('express');
const route = express.Router();
const usuarioController = require('../controllers/usuarioController');

route.post('/',usuarioController.createUsuario);

module.exports = route;