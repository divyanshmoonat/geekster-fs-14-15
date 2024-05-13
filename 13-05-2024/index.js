const express = require("express");

const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const cartRoutes = require("./routes/cart");

const app = express();

// JSON Parsing middleware
app.use(express.json());

// API Routes
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/cart", cartRoutes);

app.listen(8080, () => console.log("Server is up and running at port 8080"));