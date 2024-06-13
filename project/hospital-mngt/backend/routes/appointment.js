const express = require("express");

const appointmentController = require("../controllers/appointment");
const passport = require("../middlewares/auth");
const authroizer = require("../middlewares/authroization");

const router = express.Router();

console.log(typeof appointmentController.bookAppointment);

router.post(
  "/post",
  passport.authenticate("jwt", { session: false }),
  authroizer(["PATIENT"]),
  appointmentController.bookAppointment
); // /api/v1/appointment

router.put(
  "/update/:id",
  passport.authenticate("jwt", { session: false }),
  authroizer(["ADMIN", "DOCTOR", "PATIENT"]),
  appointmentController.editAppointment
);

module.exports = router;
