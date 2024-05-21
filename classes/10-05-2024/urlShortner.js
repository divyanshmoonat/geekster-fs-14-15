import express from "express";
import { nanoid } from "nanoid";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// const express = require("express");
// const nanoid = require("nanoid");

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isUrlValid = (url) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

/**
 * 1. Create an API which takes long URL as input and gives short URL as output
 * 2. Another end point which takes short URL and redirects the user to original (long) url
 */

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/urlForm.html");
});

app.post("/url-shortner", (req, res) => {
  if (!isUrlValid(req.body.url)) {
    return res.status(400).json({
      success: false,
      message: "Invalid URL, please validate the URL sent in request body",
    });
  }
  const shortUrl = nanoid(8);
  /**
   * 1. Read data from exisitng file
   * 2. Parse it in the form of JSON
   * 3. Add the data to the JSON
   * 4. Write the new data set to the JSON file
   */
  const urlFileData = fs.readFileSync("urlmap.json", { encoding: "utf-8" });
  const urlFileDataJson = JSON.parse(urlFileData);
  urlFileDataJson[shortUrl] = req.body.url; // New URL entry
  fs.writeFileSync("urlmap.json", JSON.stringify(urlFileDataJson));
  // Map short and long url and save them in the json file

  res.json({
    success: true,
    data: `http://localhost:8080/${shortUrl}`,
  });
});

app.get("/:shortUrl", (req, res) => {
  const fileData = fs.readFileSync("urlmap.json", { encoding: "utf-8" });
  const fileDataJson = JSON.parse(fileData);
  const shortUrl = req.params.shortUrl;
  const longUrl = fileDataJson[shortUrl]; //Original long url
  if (!longUrl) {
    return res
      .status(404)
      .json({ success: false, message: "Short URL not found" });
  }
  res.redirect(longUrl);
});

app.listen(8080, () =>
  console.log("URL Shortner app is up and running on port 8080")
);
