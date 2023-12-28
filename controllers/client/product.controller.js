const Product = require("../../models/product.model");

module.exports.product = async (req, res) => {
  const products = await Product.find({});

  const newProduct = products.map(product => {
    product.newPrice = product.price - (product.price / 100 * product.discountPercentage).toFixed(0);

    return product
  })
  res.render("client/pages/product/index.pug", {
    title: "Product Page",
    products: newProduct
  });
};
