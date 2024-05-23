const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const path = require("path");

const uploadDirectoryPath = path.join(__dirname, "..", "files");

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
});

module.exports = upload;
