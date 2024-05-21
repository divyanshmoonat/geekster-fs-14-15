const fs = require("node:fs");
const path = require("node:path");
const childProcess = require("node:child_process");
const os = require("node:os");

const wifi = require("node-wifi");

const strToWrite = "User : XYZ, LoggedInAt: 2/5/2024";

const writeDataToFile = (fileName, dataToWrite) => {
  // fs.writeFile(fileName, fileData, callbackFn)
  fs.writeFile(fileName, dataToWrite, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File written successfully");
  });
};

// writeDataToFile();

const readFile = (fileName) => {
  const data = fs.readFileSync(fileName, { encoding: "utf-8" });
  return data;
  //   fs.readFile(fileName, { encoding: "utf-8" }, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //       return null;
  //     }
  //     console.log(data);
  //     return data;
  //   });
};

// readFile();

const appendFile = () => {
  fs.appendFile("log.txt", "\n" + strToWrite, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

// appendFile();

/**
 * File data modification:
 * 1. Read the file
 * 2. modify the data in nodejs variables
 * 3. Write the file
 */

const users = [
  {
    name: "Tony Stark",
    age: 50,
  },
  {
    name: "Peter Parker",
    age: 15,
  },
  {
    name: "Steven Strange",
    age: 50,
  },
];

// writeDataToFile("users.json", JSON.stringify(users));
// const fileData = readFile("users.json");
// const data = JSON.parse(fileData);
// const updatedData = data.map((user) => {
//   if (user.name === "Peter Parker") {
//     return {
//       ...user,
//       age: 20,
//     };
//   } else {
//     return user;
//   }
// });
// console.log(updatedData);

// writeDataToFile("users.json", JSON.stringify(updatedData));

const deleteFile = (fileName) => {
  fs.unlink(fileName, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File deleted successfully");
  });
};

// deleteFile("log.txt");

// console.log(__dirname);
// console.log(__filename);

const parse = path.parse("D:ClassesGeekster\fs-14-1audio.mp3");
// console.log(parse);

const extName = path.extname("D:ClassesGeekster\fs-14-1\video.mp4");
// console.log(extName);

// const joinedPath = path.join("/classes/geekster", "../", "../", "files", "index.js");
const joinedPath = path.join(__dirname, "../", "WA_001" + extName);
// console.log(joinedPath);

//CHILD PROCESS MODULE
// childProcess.exec("start calc");
// childProcess.exec("start https://www.google.co.in/");
// childProcess.exec("start code");
// childProcess.exec("start mspaint");

// wifi.init({
//   iface: null, // network interface, choose a random wifi interface if set to null
// });

// wifi.scan((error, networks) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(networks);
// });

// console.log(os.networkInterfaces());
// console.log(os.cpus());
// console.log(os.uptime());
console.log(os.totalmem());
