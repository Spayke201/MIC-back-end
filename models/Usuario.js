const mongoose = require('mongoose');
const slugify = require('slugify');

const UsuarioSchema = new mongoose.Schema({
    login: {
        type: String,
        required: [true, 'please add a login'],
        unique: true,
        maxlenght: [20, 'Name can not be more than 50 characters']
    },
    senha: {
        type: String,
        required: [true, 'please add a senha'],
        maxlenght: [20, 'senha can not be more than 20 characters']
    },
    tipoUsuario: {
        type: String,
        required: [true, 'please add a tipo usuario']
    },
    idUsuario: {
        type: String,
        required: false
    },
    coords: {
        longitude: Number,
        latitude: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);