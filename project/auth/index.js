const express = require("express");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/authapp")
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log(err));

app.use("/api/v1/", authRoutes);

app.listen(8080, () => console.log("App is up and running at port 8080"));
