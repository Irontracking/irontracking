const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ejercicioSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    },
    iterations: {
        type: Number,
        required: true
    },
    link: {
        type: String,
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