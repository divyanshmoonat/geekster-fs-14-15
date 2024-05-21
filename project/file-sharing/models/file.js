const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  originalFilename: {
    type: String,
  },
  newFilename: {
    type: String,
  },
  path: {
    type: String,
  },
});

const FileModel = mongoose.model("files", fileSchema);

module.exports = FileModel;
