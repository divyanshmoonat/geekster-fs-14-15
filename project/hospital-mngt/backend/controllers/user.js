const UserModel = require("../models/user");
const bcrypt = require("bcrypt");

const addNewAdmin = async (req, res) => {
  // ToDo : Add your validation for fields
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const user = {
    ...req.body,
    password: hash,
    role: "ADMIN",
  };
  // const newUser = new UserModel(user);
  // await newUser.save();
  await UserModel.create(user);
  res.json({
    success: true,
    message: "Admin registered successfully",
  });
};

const userController = {
  addNewAdmin,
};

module.exports = userController;
