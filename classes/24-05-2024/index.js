const express = require("express");

const app = express();

/**
 * add, subtract, divide, multiply
 */

// const add = (a, b) => {
//   //   console.log("ADD", a + b);
//   return a + b;
// };

// const subtract = (a, b) => {
//   //   console.log("SUBTRACT", a - b);
//   return a - b;
// };

// const divide = (a, b) => {
//   //   console.log("DIVIDE", a / b);
//   return a / b;
// };

// const multiply = (a, b) => {
//   //   console.log("MULTIPLY", a * b);
//   return a * b;
// };

// const r1 = subtract(10, 2);
// console.log(r1);
// const r2 = multiply(r1, 2);
// console.log(r2);
// const r3 = add(r2, 2);
// console.log(r3);
// const r4 = divide(r3, 2);
// console.log(r4);

const output = [];

const multiply = (req, res, next) => {
  // if(url === "/") {
  //     continue
  // } else {
  //     skip
  // }
  console.log("MULTIPLY");
  output.push({ operation: "ADD", result: 1 });
  next();
  // return res.json({ msg: "Output from multiply" }); // Stop the execution and return the response
};

const divide = (req, res, next) => {
  console.log("DIVIDE");
  output.push({ operation: "ADD", result: 1 });
  //   return res.json({ msg: "Stopped at divide" });
  next();
};

const expressjson = (req, res, next) => {
  console.log("ADD");
  output.push({ operation: "ADD", result: 1 });
  req.body = "HELLO_RESULT";
  next();
};

const subtract = (req, res, next) => {
  console.log("SUBTRACT", req.body);
  output.push({ operation: "ADD", result: 1 });
  next();
};

const percentage = (req, res, next) => {
  console.log("PERCENTAGE", req.body);
  next();
};

const median = (err, req, res, next) => {
  console.log("MEDIAN");
  return res.json({ msg: "MEDIAN MIDDLEWARE" });
};

// Calling Sequenec
app.use(expressjson); // Calling add function here

app.use(subtract); // Calling subtract function here

app.use(divide); // Calling divide function here
app.use(multiply); // Calling multiply function here

app.get("/abc", (req, res, next) => {
  console.log("API ABC");
  res.json({ msg: "Hello world", result: output });
  next();
});

app.get("/xyz", (req, res, next) => {
  console.log("API XYZ");
  //   res.json({ msg: "Msg from XYZ API" });
  next();
});

app.use(percentage);

app.use(median);
app.listen(8080, () => console.log("Server is up and running at port 8080"));
