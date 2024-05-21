const http = require("node:http");

const requestEventListener = (req, res) => {
  console.log(req.method);
  if (req.url === "/get-users") {
    if (req.method === "GET") {
      // GET logic
    } else if (req.method === "POST") {
      // POST logic
    }
    res.writeHead(200, {
      "Content-Type": "application/json",
    }); // Setting response header
    const output = {
      success: true,
      message: "Users list api with GET method",
    };
    res.end(JSON.stringify(output)); // Setting response body
  } else if (req.url === "/get-products") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    }); // Setting response header
    const output = {
      success: true,
      message: "Product list api",
    };
    res.end(JSON.stringify(output));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    const output = {
      success: false,
      message: "Error 404, Route not found",
    };
    res.end(JSON.stringify(output));
  }
  console.log(req.url); // Route
  //   const dummyJson = {
  //     success: true,
  //     message: "This is my first api",
  //   };
  //   console.log("Request received");
  //   res.end("Hello from NodeJS"); // Send the response back to the client
  //   res.end(JSON.stringify(dummyJson)); // Response body
};

const server = http.createServer(requestEventListener);

server.listen(8080, () => console.log("Server is up and running on port 8080"));
