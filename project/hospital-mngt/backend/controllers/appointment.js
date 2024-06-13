const { catchAsync } = require("../middlewares/errorHandler");
const AppointmentModel = require("../models/appointment");

const bookAppointmentApiFn = async (req, res) => {
  // ToDo: Validations
  await AppointmentModel.create({
    ...req.body,
    userId: req.user._id,
  });
  // Send mail to patient and doctor
  res.json({
    success: true,
    message: "Appointment booked",
  });
};

const editAppiontmentApiFn = async (req, res) => {
  const userId = req.user._id; // Logged in users's ID
  const appointmentId = req.params.id;
  const appointment = await AppointmentModel.findById(appointmentId);
  if (
    (req.user.role === "DOCTOR" && userId !== appointment.doctorId) ||
    (req.user.role === "PATIENT" && userId !== appointment.userId)
  ) {
    res.status(403).json({
      success: false,
      message: "You do not have permission to edit this appointment",
    });
  }

  // ToDo: Add code to edit the appointment
  console.log(appointment);
  res.json({
    success: true,
    message: "Appointment edited successfully",
  });
};

const appointmentController = {
  bookAppointment: catchAsync(bookAppointmentApiFn),
  editAppointment: catchAsync(editAppiontmentApiFn),
};

module.exports = appointmentController;
