const express = require("express");
const ProductsService = require("../../../services/v0/product.services");

const router = express.Router();
const productsService = new ProductsService();

router.get("/", async (req, res) => {
  const products = await productsService.find();

  res.status(200).json(products);
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productsService.findOne(id);

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const newProduct = await productsService.create(body);

  res.status(201).json({
    message: "created",
    data: newProduct,
  });
});

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const newProducto = await productsService.update(id, body);

    res.status(200).json({
      success: true,
      message: "updated",
      data: newProducto,
      count: 1,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: [],
      count: 0,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = await productsService.delete(id);

    res.status(200).json({
      success: true,
      message,
      data: id,
      count: 1,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
      data: [],
      count: 0,
    });
  }
});

module.exports = router;
