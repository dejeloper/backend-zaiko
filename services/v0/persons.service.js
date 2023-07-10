const boom = require("@hapi/boom");
const pool = require("../../libs/postgres");

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
      const query = `SELECT * FROM public."Persons" WHERE "Id" = '1000'`; //
      const response = await this.pool.query(query);

      if (response.rows.length <= 0) throw boom.notFound("Persons not found");

      return {
        success: true,
        data: response.rows,
        message: "Ok",
        count: response.rows.length,
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
