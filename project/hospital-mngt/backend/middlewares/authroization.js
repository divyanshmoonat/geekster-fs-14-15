const authorizer = (roles) => {
  return (req, res, next) => {
    if (roles.includes(req.user.role)) {
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
