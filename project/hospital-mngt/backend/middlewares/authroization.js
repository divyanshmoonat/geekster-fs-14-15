const authorizer = (role) => {
  return (req, res, next) => {
    if (role === req.user.role) {
      next();
    } else {
      res.status(403).json({
        success: false,
        message: "Forbidden",
      });
    }
  };
};

module.exports = authorizer;
