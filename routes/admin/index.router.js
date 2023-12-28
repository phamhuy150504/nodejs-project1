const systemConfig = require("../../configs/system")
const dashboard = require("./dashboard.router")
const products = require("./products.router");

module.exports = (app) => {
  const PATH_ADMIN = systemConfig.prefixAdmin

  app.use(`${PATH_ADMIN}/dashboard`, dashboard);
  app.use(`${PATH_ADMIN}/dashboard/products`, products)

};
