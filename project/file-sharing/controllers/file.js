const path = require("path");

const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const FileModel = require("../models/file");

const uploadDirectoryPath = path.join(__dirname, "..", "files");

console.log(uploadDirectoryPath);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDirectoryPath), // Folder path where the files will be saved
  filename: (req, file, cb) => {
    console.log(file.originalname);
    const fileName = uuidv4() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
}).single("file"); // Fieldname in your formdata

const uploadFile = async (req, res) => {
  upload(req, res, async (error) => {
    // console.log(req.body);
    if (error) {
      console.log("ERROR WHILE UPLOADING FILE", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong, please try again after sometime",
      });
    }
    // Save the file in DB
    // console.log(req.file);

    const newFile = new FileModel({
      originalFilename: req.file.originalname,
      newFilename: req.file.filename,
      path: req.file.path,
    });

    const newlyInsertedFile = await newFile.save();

    console.log("File uploaded successfully");
    res.json({
      success: true,
      message: "File uploaded successfully",
      fileId: newlyInsertedFile._id,
    });
  });
};

const generateDynamicLink = async (req, res) => {
  res.json({
    success: true,
    message: "Generate dynamic link API",
  });
};

const downloadFile = async (req, res) => {
  res.json({
    success: true,
    message: "Download file API",
  });
};

const sendFile = async (req, res) => {
  res.json({
    success: true,
    message: "Send file file API",
  });
};

const fileController = {
  uploadFile,
  generateDynamicLink,
  downloadFile,
  sendFile,
};

module.exports = fileController;
