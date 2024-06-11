const catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      console.log("ERROR OCCURED");
      next(err);
    }
    // Promise.resolve(fn(req, res, next)).catch((err) => {
    //   next(err);
    // });
  };
};

const errorHandler = (err, req, res, next) => {
  console.log("Common error handler");
  // Log errors to a file
  res.json({
    success: false,
    message: "Something went wrong, please try again after sometime",
  });
};

module.exports = { errorHandler, catchAsync };
