const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(`Error in DB Connection ${err}`));

const app = express();

app.use(express.json());

app.use("/api/v1/user", userRoutes);

app.listen(process.env.PORT_NO, () =>
  console.log(`Server is up and running at port ${process.env.PORT_NO}`)
);
