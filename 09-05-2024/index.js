const express = require("express");
const fs = require("node:fs");

const app = express();

const loggingMiddleware = (req, res, next) => {
  fs.appendFileSync(
    "access.log",
    `\nRequest received at URL ${req.url} at ${new Date()}`
  );
  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey === "123-14sd-342") {
    next();
  } else {
    res.json({
      success: false,
      message: "Please pass API key",
    });
  }
};

// Application middlewares
app.use(loggingMiddleware);
// app.use(apiKeyMiddleware);
app.use(express.json());

//abc.com/api/v1/get-products // EndPoint

const products = [
  {
    productId: 1,
    name: "Mobile",
  },
  {
    productId: 2,
    name: "T-Shirt",
  },
  {
    productId: 3,
    name: "Laptop",
  },
];

app.get("/api/v1/get-products/:productId", (req, res, next) => {
  try {
    console.log(req.params);
    const product = product.find(
      (product) => product.productId == req.params.productId
    );
    if (product) {
      res.json({
        success: true,
        data: product,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Product with id " + req.params.productId + " not found",
      });
    }
  } catch (err) {
    // console.log("ERROR_CAUGHT", err);
    next(err); // If next() contains any arguments then expressjs will treat it as error and call error handling middleware (if available)
  }
});

app.get("/api/v1/get-orders", (req, res) => {
  res.json({
    success: true,
    message: "Dummy Get Orders API",
  });
});

app.post("/api/v1/register", (req, res) => {
  console.log(req.body);
  res.json({
    success: true,
    message: "Dummy User Registration API",
  });
});

app.get("/api/v1/get-products", (req, res) => {
  console.log(req.query);
  console.log(products);
  const product = products.find(
    (product) => product.productId == req.query.productId
  );
  console.log(product);
  //   if (product) {
  res.json({
    success: true,
    data: product,
  });
  //   return;
  //   }
  //   res.json({
  //     success: true,
  //     message: "Dummy Get Products API",
  //     data: products,
  //   });
});

const errorMiddleware = (err, req, res, next) => {
  console.log("Generic error handling middleware", err);
  fs.appendFileSync("error.log", err.message);
  res.status(500).json({
    success: false,
    message: "Something went wrong, please try again after sometime",
  });
};

app.use(errorMiddleware);

app.listen(8080, () =>
  console.log("Express server is up and running on port 8080")
);
