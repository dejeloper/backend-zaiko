const express = require("express");

const PersonsService = require("../../../services/v0/persons.service");
const validatorHandler = require("../../../middlewares/validator.handler");
const {
  createPersonsSchema,
  getPersonSchema,
  updatePersonSchema,
} = require("../../../schemas/persons.schema");

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

router.get(
  "/:Id",
  validatorHandler(getPersonSchema, "params"),
  async (req, res, next) => {
    try {
      const { Id } = req.params;
      const person = await service.findOne(Id);
      res.json(person);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createPersonsSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  }
);

router.patch(
  "/:Id",
  validatorHandler(getPersonSchema, "params"),
  validatorHandler(updatePersonSchema, "body"),
  async (req, res, next) => {
    try {
      const { Id } = req.params;
      const body = req.body;
      const person = await service.update(Id, body);
      res.json(person);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:Id",
  validatorHandler(getPersonSchema, "params"),
  async (req, res, next) => {
    try {
      const { Id } = req.params;
      const person = await service.delete(Id);
      res.json(person);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
