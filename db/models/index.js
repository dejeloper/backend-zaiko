const { Persons, PersonsSchema } = require("./Person.model");

function setupModels(sequelize) {
  Persons.init(PersonsSchema, Persons.config(sequelize));
}

module.exports = { setupModels };
