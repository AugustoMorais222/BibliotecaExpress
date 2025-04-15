const express = require('express');
const route = express.Router();
const usuarioController = require('../controllers/usuarioController');

route.post('/',usuarioController.createUsuario);
route.put('/:id', usuarioController.updateUsuario);
route.get('/:id', usuarioController.getUsuario);
route.get('/', usuarioController.getAll);

module.exports = route;