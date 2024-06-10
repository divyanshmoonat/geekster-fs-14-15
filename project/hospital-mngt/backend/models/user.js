const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["ADMIN", "DOCTOR", "PATIENT"],
  },
  gender: {
    type: String,
    required: true,
    enum: ["M", "F", "O"],
  },
  password: {
    type: String,
    required: true,
  },
  doctorDepartment: {
    type: String,
    required: false,
  },
  docAvatar: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
