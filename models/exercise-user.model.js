const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseUserSchema = new Schema({
  idExercise: {
    type: Schema.Types.ObjectId,
    required: true
  },
  idGithub:{
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  iterations:  [String]
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const ExerciseUser = mongoose.model('ExerciseUser', exerciseUserSchema);

module.exports = ExerciseUser;