const boom = require("@hapi/boom");
const pool = require("../../libs/postgres");
const { models } = require("../../libs/sequelize");

class PersonsService {
  constructor() {
    this.pool = pool;
    this.pool.on("error", (err) =>
      console.error("Error en el pool de conexión: ", err)
    );
  }

  async create(data) {
    return data;
  }

  async find() {
    try {
      // const query = `SELECT * FROM public."Persons"`;
      // const [data] = await sequelize.query(query);
      const data = await models.Persons.findAll();

      if (data.length <= 0) throw boom.notFound("Persons not found");

      return {
        success: true,
        data,
        message: "Ok",
        count: data.length,
      };
    } catch (error) {
      throw boom.badGateway(error.message);
    }
  }

  async findOne(id) {
    return id;
  }

  async update(id, changes) {
    return changes;
  }

  async delete(id) {
    return { id };
  }
}

module.exports = PersonsService;
