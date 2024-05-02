// const name = prompt("Enter your name");
// console.log("Hi ", name);

// import readLine from "readline";
// const readLine = require("readline");

// const rl = readLine.createInterface({
//   input: process.stdin, // Terminal
//   output: process.stdout, // Terminal
// });

// rl.question("Enter your name ", (answer) => {
//   console.log("Hi", answer);
//   rl.close();
// });

/**
 * File Handling
 * CRUD
 * Read
 */

const fs = require("node:fs");
/**
 * fs.readFile(FILE NAME, ENCODING DETAILS, CALLBACK FN)
 */
// console.log("A");
// fs.readFile("sample.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("B");
//   //   console.log(data);
// });
// console.log("C");

console.log("A");
try {
  const data = fs.readFileSync("sample.txt", { encoding: "utf-8" });
  console.log("B");
  console.log(data);
} catch (err) {
  console.log(err);
}
console.log("C");
