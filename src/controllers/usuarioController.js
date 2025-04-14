const Usuario = require('../models/usuarioModel');

exports.createUsuario = async (res,req,next) => {
    try{
        const dados = req.body;

        const novousuario = new Usuario(dados);
        const usuarioSalvo = await novousuario.save();

        res.status(201).json(usuarioSalvo);
    }catch(error){
        res.status(500).json({erro: error.message});
    }

}