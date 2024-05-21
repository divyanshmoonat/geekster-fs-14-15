const express = require("express");

const fileController = require("../controllers/file");

const router = express.Router();

router.post("/api/files/", fileController.uploadFile);

router.get("/files/:uuid", fileController.generateDynamicLink);

router.get("/files/download/:uuid", fileController.downloadFile);

router.post("/api/files/send", fileController.sendFile);

module.exports = router;
