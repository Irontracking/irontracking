const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: "string",
        required: true
    },
    email: {
        type: "string",
        required: true
    },
    imageUrl: {
        type: "string",
        required: true
    },
    role: {
        type: "string"
    }
}, {
    timestamps: {
        createdAt: "created_at",
        updateAt: "update_at"
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;