const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/userManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


const profileSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  age: { type: Number }
});


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: [{ type: String }],
  profile: profileSchema,
  lastLogin: { type: Date }
});

const User = mongoose.model('User', userSchema);


module.exports = User;
