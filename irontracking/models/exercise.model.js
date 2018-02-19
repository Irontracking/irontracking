const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
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

const Exercise = mongoose.model('Ejercicio', exerciseSchema);

module.exports = Exercise;