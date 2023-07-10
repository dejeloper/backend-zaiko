const express = require("express");

const PersonsService = require("../../../services/v0/persons.service");
// const validatorHandler = require("../../../middlewares/validator.handler");

// const {
//   createProductSchema,
//   updateProductSchema,
//   getProductSchema,
// } = require("../../../schemas/product.schema");

const router = express.Router();
const service = new PersonsService();

router.get("/", async (req, res, next) => {
  try {
    const persons = await service.find();
    res.json(persons);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
