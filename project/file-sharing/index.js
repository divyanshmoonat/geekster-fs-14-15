const express = require("express");
const mongoose = require("mongoose");

const fileRoutes = require("./routes/file");

const app = express();

app.use(express.urlencoded());

mongoose
  .connect("mongodb://localhost:27017/filesharingapp")
  .then(() => console.log("DB Connection established successfully"))
  .catch((err) => console.log("Error while connecting database", err));

app.use(fileRoutes);

app.listen(8080, () => console.log("App is up and running on port 8080"));
