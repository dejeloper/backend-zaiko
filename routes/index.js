const express = require("express");

const productsRouterv0 = require("./api/v0/products.router");
const usersRouterv0 = require("./api/v0/users.router");

function routerApi(app) {
  const routerv0 = express.Router();
  app.use("/api/v0", routerv0);

  routerv0.use("/products", productsRouterv0);
  routerv0.use("/users", usersRouterv0);
}
module.exports = routerApi;
