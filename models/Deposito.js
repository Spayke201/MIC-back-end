const mongoose = require('mongoose');
const slugify = require('slugify');

const DepositoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'please add a nomeDeposito'],
        unique: true,
        maxlenght: [20, 'conteudo can not be more than 20 characters']
    },
    endereco: {
        type: String,
        required: [true, 'please add an address']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Deposito', DepositoSchema);