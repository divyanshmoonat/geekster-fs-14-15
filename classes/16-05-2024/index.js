const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");

const app = express();

// JSON Parsing middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/jobapp")
  .then(() => console.log("Connection with Database established successfully"))
  .catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

// API Routes
app.use(jobRoutes);

app.listen(8080, () => console.log("Server is up and running at port 8080"));
