const registerUser = (req, res) => {
  res.json({
    message: "Dummy User Registration API",
  });
};

const loginUser = (req, res) => {
  res.json({
    message: "Dummy User Login API",
  });
};

const userController = {
  registerUser,
  loginUser,
};

module.exports = userController;
