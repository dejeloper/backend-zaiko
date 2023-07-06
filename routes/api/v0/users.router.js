const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.person.firstName(),
      lastName: faker.person.lastName(),
      image: faker.image.avatarGitHub(),
    });
  }
  res.status(200).json(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    id,
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    image: faker.image.avatarGitHub(),
  });
});

router.post("/", (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: "Creation",
    data: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.status(200).json({
    message: "Update",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    message: "deleted element",
    id,
  });
});

module.exports = router;
