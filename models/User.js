const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  title: String,
  text: String
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
