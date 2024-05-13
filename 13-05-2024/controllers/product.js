const getProductList = (req, res) => {
  res.json({
    message: "Dummy Get Product List API",
  });
};

const getProductDetails = (req, res) => {
  res.json({
    message: "Dummy Get Product Details API",
  });
};

const productController = {
  getProductList,
  getProductDetails,
};

module.exports = productController;
