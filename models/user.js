var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: String,
  googleId: String,
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);