const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    firstName: {
      // Detail of the patient for whom the appointment is being booked
      type: String,
      required: [true, "First Name Is Required!"],
      minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    lastName: {
      // Detail of the patient for whom the appointment is being booked
      type: String,
      required: [true, "Last Name Is Required!"],
      minLength: [3, "Last Name Must Contain At Least 3 Characters!"],
    },
    email: {
      // Detail of the patient for whom the appointment is being booked
      type: String,
      required: false,
      default: "",
      //   validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    phone: {
      // Detail of the patient for whom the appointment is being booked
      type: String,
      required: [true, "Phone Is Required!"],
      minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
      maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
    },
    address: {
      // Detail of the patient for whom the appointment is being booked
      type: String,
      required: [true, "Address Is Required!"],
    },
    uid: {
      type: String,
      required: [true, "Uid Is Required!"],
      // minLength: [13, "Uid Must Contain Only 13 Digits!"],
      // maxLength: [13, "Uid Must Contain Only 13 Digits!"],
    },
    dob: {
      type: Date,
      required: [true, "DOB Is Required!"],
    },
    gender: {
      type: String,
      required: [true, "Gender Is Required!"],
      enum: ["M", "F", "O"],
    },
    appointmentDate: {
      type: Date,
      required: [true, "Appointment Date Is Required!"],
    },
    department: {
      type: String,
      required: [true, "Department Name Is Required!"],
    },
    hasVisited: {
      type: Boolean,
      default: false,
    },
    doctorId: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: [true, "Doctor Id Is Invalid!"],
    },
    userId: {
      // Who is booking the appointment
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: [true, "Patient Id Is Required!"],
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected", "Cancelled"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const AppointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports = AppointmentModel;
