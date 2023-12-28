const product_routers = require("./product.router");
const home_router = require("./home.router");

module.exports = (app) => {
  app.use("/", home_router);

  app.use("/products", product_routers);
};
