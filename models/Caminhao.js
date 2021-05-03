const mongoose = require('mongoose');
const slugify = require('slugify');

const CaminhaoSchema = new mongoose.Schema({
    placa: {
        type: String,
        required: [true, 'please add a placa'],
        unique: true,
        maxlenght: [7, 'Name can not be more than 7 characters']
    },
    modelo: {
        type: String,
        required: [true, 'please add a modelo'],
        maxlenght: [15, 'Name can not be more than 15 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Caminhao', CaminhaoSchema);