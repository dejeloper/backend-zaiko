const { faker } = require("@faker-js/faker");
const boom = require("@hapi/boom");

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);

    return {
      success: true,
      data: newProduct,
      message: "Ok",
      count: 1,
    };
  }

  find() {
    return {
      success: true,
      data: this.products,
      message: "Ok",
      count: this.products.length,
    };
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound("product not found");
    }
    if (product.isBlock) {
      throw boom.conflict("product is block");
    }

    return {
      success: true,
      data: product,
      message: "Ok",
      count: 1,
    };
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound("product not found");
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return {
      success: true,
      data: this.products[index],
      message: "Ok",
      count: 1,
    };
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound("product not found");
    }
    this.products.splice(index, 1);

    return {
      success: true,
      data: id,
      message: "Ok",
      count: 1,
    };
  }
}

module.exports = ProductsService;
