const Products = require("../../models/product.model");
module.exports.products = async (req, res) => {
    console.log(req.query.status);
    const products = await Products.find({});

    console.log(products);
    res.render("admin/pages/products/products.pug", {
        title: "Products",
        products: products
    });
};
  