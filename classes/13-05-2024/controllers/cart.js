const addToCart = (req, res) => {
  //ToDo: Write your API Logic here
  res.json({
    message: "Dummy Add to cart API using MVC",
  });
};

const addToWishlist = (req, res) => {
  res.json({
    message: "Dummy Add to wishlist API",
  });
};

const cartController = {
  addToCart,
  addToWishlist,
};

module.exports = cartController;
