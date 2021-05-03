const mongoose = require('mongoose');
const slugify = require('slugify');

const CargaSchema = new mongoose.Schema({
    conteudo: {
        type: String,
        unique: true,
        required: [true, 'please add a conteudo'],
        maxlenght: [20, 'conteudo can not be more than 20 characters']
    },
    peso: {
        type: Number,
        required: [true, 'please add a modelo']
    },
    idDepositoCarga: {
        type: String,
        required: [true, 'please add a idDepositoCarga']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Carga', CargaSchema);