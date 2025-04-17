const Usuario = require('../models/usuarioModel');

exports.createUsuario = async (req,res,next) => {
    try{
        const dados = req.body;

        const novousuario = new Usuario(dados);
        const usuarioSalvo = await novousuario.save();

        res.status(201).json(usuarioSalvo);
    }catch(error){
        res.status(500).json({erro: error.message});
    }

}

exports.updateUsuario = async (req, res, next) =>{
    try{
        const id = req.params.id;
        const dados = req.body;
        const usuario = await Usuario.findByIdAndUpdate(id,dados,{new:true, runValidators: true});
        res.status(200).json(usuario);
    }catch(err){
        res.status(500).json({erro: "Erro ao atualizar usuario", detalhes: err.message});
    }
}

exports.getUsuario = async (req, res, next) => {
    try{
        const id = req.params.id;
        const usuario = await Usuario.findById(id);

        if(!usuario){
            return res.status(404).json({messagem: "Usuario não encontrado"});
        }
        res.status(200).json(usuario);
    }catch(err){
        res.status(500).json({erro: "Erro ao buscar o usuario", detalhes: err.message});
    }
}

exports.getAll = async (req, res, next) =>{
    try{
        const usuario = await Usuario.find();
        res.status(200).json(usuario);
    }catch(err){
        res.status(500).json({erro: "Erro ao buscar usuarios", detalhes: err.message});
    }

}

exports.deleteUsuario = async (req, res, next) => {
    try {
        const id = req.params.id;
        const resultado = await Usuario.findByIdAndDelete(id);

        if (resultado === 0) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        res.status(200).json({ mensagem: "Usuário deletado com sucesso", id });
    } catch (err) {
        res.status(500).json({
            erro: "Erro ao deletar o usuário",
            detalhes: err.message
        });
    }
};