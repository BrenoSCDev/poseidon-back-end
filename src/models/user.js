const mongoose = require("mongoose")

const emergencyContactSchema = new mongoose.Schema({
  name: String,
  relationship: String,
  phone: String
});


const hyperbaricPhysicianSchema = new mongoose.Schema({
  name: String,
  phone: String
});


const userSchema = new mongoose.Schema({
  name: String,
  secondName: String,
  photo: String,
  record: Number,
  war_name: String,
  battalion: String,
  company: String,
  health: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
  },
  emergency: emergencyContactSchema,
  doctor: hyperbaricPhysicianSchema,
  password: String
});

const User = mongoose.model('User', userSchema)
module.exports = User

