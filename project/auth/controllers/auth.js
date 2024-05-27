const bcrypt = require("bcrypt");

const UserModel = require("../models/auth");

const singUp = async (req, res) => {
  //   console.log(req.body);
  // Todo: Validate request body
  const salt = bcrypt.genSaltSync(10);
  console.log("SALT=>", salt);

  const passwordHash = bcrypt.hashSync(req.body.password, salt);
  console.log("HASH=>", passwordHash);

  const newUser = new UserModel({ ...req.body, password: passwordHash });
  const newlyInsertedUser = await newUser.save();
  console.log(newlyInsertedUser._id);
  res.json({
    message: "Registration successful, please sign in",
  });
};
const login = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  //   console.log(user);
  if (!user) {
    return res.json({
      message: "User not found, please register first",
    });
  }

  const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
  //   console.log(isPasswordValid);

  if (isPasswordValid) {
    return res.json({
      message: "Login successful",
    });
  }
  res.json({
    message: "Incorrect username or password",
  });
};

const authController = {
  singUp,
  login,
};

module.exports = authController;
