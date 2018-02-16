const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ejercicioSchema = new Schema({
    _id: {
        type: "string",
        required: true,
    },
    name: {
        type: "string",
        required: true
    },
    modulo: {
        type: "string",
        required: true
    },
    iteraciones: {
        type: number,
        required: true
    },
    role: {
        type: "string"
    },
    enlace: {
        type: "string",
        required: true
    }
});

const Ejercicio = mongoose.model('Ejercicio', ejercicioSchema);

module.exports = Ejercicio;