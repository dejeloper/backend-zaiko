const express = require("express");
const ProductsService = require("../../../services/v0/product.services");

const router = express.Router();
const productsService = new ProductsService();

router.get("/", (req, res) => {
  const products = productsService.find();

  res.status(200).json(products);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = productsService.findOne(id);

  res.status(200).json(product);
});

router.post("/", (req, res) => {
  const body = req.body;
  const newProduct = productsService.create(body);

  res.status(201).json({
    message: "created",
    data: newProduct,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const newProducto = productsService.update(id, body);

  res.status(200).json({
    message: "update",
    data: newProducto,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const { message } = productsService.delete(id);

  if (message) {
    res.status(200).json({
      message: "deleted",
      id,
    });
  } else {
    res.status(404).json({
      message,
      id,
    });
  }
});

module.exports = router;
