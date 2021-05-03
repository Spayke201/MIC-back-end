const mongoose = require('mongoose');
const slugify = require('slugify');

const MotoristaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'please add a name'],
        maxlenght: [50, 'Name can not be more than 50 characters']
    },
    cpf: {
        type: String,
        required: [true, 'please add a cpf'],
        maxlenght: [11, 'cpf can not be more than 11 characters']
    },
    telefone: {
        type: String,
        required: [true, 'please add a telefone'],
        maxlenght: [11, 'telefone can not be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'please add a email'],
        maxlenght: [50, 'email can not be more than 50 characters']
    },
    idUsuario: {
        type: String,
        required: [true, 'please add a idUsuario']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Motorista', MotoristaSchema);