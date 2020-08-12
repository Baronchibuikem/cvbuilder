// blogpost.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// BlogPost Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true
  },
  avatar: {
    type: String,
  },
}, {
  timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);