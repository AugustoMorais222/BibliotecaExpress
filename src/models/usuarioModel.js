const mongoose = require('mongoose')
const Schema = mongoose.Schema()

const UsuarioSchema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    senha:{
        type: String,
        required: true
    },
    cpf:{
        type: String,
        required: true,
        unique: true
    },
    dataNascimento:{
        type: Date,
        required: true
    },
    dataCadastro:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario',UsuarioSchema);