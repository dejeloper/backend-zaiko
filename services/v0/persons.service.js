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
    const newPerson = await models.Persons.create(data);

    return {
      success: true,
      data: newPerson,
      message: "Ok",
      count: 1,
    };
  }

  async find() {
    try {
      // const query = `SELECT * FROM public."Persons"`;
      // const [data] = await sequelize.query(query);
      const persons = await models.Persons.findAll();

      if (persons.length <= 0) throw boom.notFound("Persons not found");

      return {
        success: true,
        data: persons,
        message: "Ok",
        count: persons.length,
      };
    } catch (error) {
      throw boom.badGateway(error.message);
    }
  }

  async findOne(id) {
    const person = await models.Persons.findOne({
      where: {
        Id: id,
        Enabled: true,
      },
    });
    if (!person) {
      throw boom.notFound("Person not found");
    }

    return {
      success: true,
      data: person,
      message: "Ok",
      count: 1,
    };
  }

  async update(id, changes) {
    const { data: person } = await this.findOne(id);
    person.update(changes);

    return {
      success: true,
      data: changes,
      message: "Ok",
      count: 1,
    };
  }

  async delete(id) {
    const { data: person } = await this.findOne(id);
    const changes = {
      Enabled: false,
    };

    person.update(changes);
    return {
      success: true,
      data: { id },
      message: "Ok",
      count: 1,
    };
  }
}

module.exports = PersonsService;
