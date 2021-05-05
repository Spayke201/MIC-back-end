const mongoose = require('mongoose');
const slugify = require('slugify');

const AnalistaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'please add a name'],
        maxlenght: [50, 'Name can not be more than 50 characters']
    },
    cpf: {
        type: String,
        required: [true, 'please add a cpf'],
        maxlenght: [11, 'Name can not be more than 11 characters']
    },
    telefone: {
        type: String,
        required: [true, 'please add a telefone'],
        maxlenght: [11, 'Name can not be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'please add a email'],
        maxlenght: [50, 'Name can not be more than 50 characters']
    },
    idUsuario: {
        type: String,
        required: [true, 'please add a idUsuario']
    },
    imgUrl: { 
        type: String,
        required: [true, 'please add a img']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Analista', AnalistaSchema);