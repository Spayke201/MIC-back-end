const mongoose = require('mongoose');
const slugify = require('slugify');

const AgendamentoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'please add a nome']
    },
    idCarga: {
        type: String,
        required: [true, 'please add a idCarga']
    },
    idCaminhao: {
        type: String,
        required: false
    },
    destino: {
        type: String,
        required: [true, 'please add a destino']
    },
    idUsuario: { // will be inserted after
        type: String,
        required: false
    },
    idDeposito: {
        type: String,
        required: [true, 'please add a idDeposito']
    },
    createdById: {
        type: String,
        required: [true, 'please add a createdById']
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);