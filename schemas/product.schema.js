const Joi = require("joi");

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(20).messages({
  "string.base": `"nombre" debe ser un tipo de 'texto'`,
  "string.empty": `"nombre" no puede ser un campo vacío`,
  "string.min": `"nombre" debe tener una longitud mínima de {#limit}`,
  "string.max": `"nombre" debe tener una longitud máxima de {#limit}`,
});
const price = Joi.number().integer().min(10).messages({
  "string.base": `"precio" debe ser un tipo de 'número'`,
  "string.empty": `"precio" no puede ser un campo vacío`,
  "string.min": `"precio" debe tener una longitud mínima de {#limit}`,
});
const image = Joi.string().uri().messages({
  "string.base": `"imagen" debe ser un tipo de 'url'`,
  "string.empty": `"imagen" no puede ser un campo vacío`,
});

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
