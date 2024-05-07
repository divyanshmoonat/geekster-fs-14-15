const express = require("express");

/**
 * 1. Create a server
 * 2. Bind the server to a port number
 * 3. Attach request listener callback
 * 4. Send the response against the request
 */

const app = express();

app.get("/get-users", (req, res) => {
  const dummyJson = {
    success: true,
    message: "Users list GET API",
  };
  console.log("Request received on Get Users end point");
  res.json(dummyJson);
});

app.get("/get-products", (req, res) => {
  const dummyJson = {
    success: true,
    message: "Products list GET API",
  };
  res.json(dummyJson);
});

app.listen(8080, () =>
  console.log("Express server is up and running at port 8080")
);
