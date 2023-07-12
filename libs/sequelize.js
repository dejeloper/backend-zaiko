const { Sequelize } = require("sequelize");
const URI = require("./URI");

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
});

module.exports = sequelize;
