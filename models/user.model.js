const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
      idGithub:{
          type: String,
          required: true
      },
      username: {
          type: String,
          required: true
      },
      displayName: {
        type: String,
        required: true
      },
      accessToken: {
        type: String,
        required: true
      },
      refreshToken: {
        type: String
      },
          avatar_url: {
              type: String
      },
      role: {
        type: String,
        required: true
      },
      points: {
        type: Number,
        required: true
      }
}, {
      timestamps: {
          createdAt: "created_at",
          updateAt: "update_at"
      }
});

const User = mongoose.model('User', userSchema);

module.exports = User;