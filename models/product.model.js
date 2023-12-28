const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
});


// the third argument is the name of mongoDB instance
const Product = mongoose.model("Products", productSchema, "products");

module.exports = Product;

