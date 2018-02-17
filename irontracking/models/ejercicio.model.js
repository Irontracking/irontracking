const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ejercicioSchema = new Schema({
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
    enlace: {
        type: "string",
        required: true
    }
},{
  timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
  }

});

const Ejercicio = mongoose.model('Ejercicio', ejercicioSchema);

module.exports = Ejercicio;