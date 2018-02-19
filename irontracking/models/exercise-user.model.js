const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseUserSchema = new Schema({
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  comentario: {
    type: String,
    required: true
  }
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const ExerciseUser = mongoose.model('Ejercicio', exerciseUserSchema);

module.exports = ExerciseUser;