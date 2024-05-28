const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const jwtSecretKey = "MY_JWT_SECRET_KEY123";

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
  const tokenExpiry = Math.ceil(new Date().getTime() / 1_000) + 3600; // 1hr validity
  const payload = {
    userId: user._id,
    name: user.name,
    exp: tokenExpiry,
  };

  const token = jwt.sign(payload, jwtSecretKey);

  if (isPasswordValid) {
    // Generate JWT
    return res.json({
      token,
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
