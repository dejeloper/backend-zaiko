const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      id: i + 1,
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.url(),
    });
  }

  res.json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: "producto5",
    price: 900,
  });
});

router.get("/:productId/category/:categoryId", (req, res) => {
  const { categoryId, productId } = req.params;

  res.json({
    categoryId,
    productId,
    categoryName: "producto10",
    productName: "category2",
    price: 230,
  });
});

module.exports = router;
