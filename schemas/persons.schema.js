const Joi = require("joi");

const idRule = Joi.number().integer().messages({
  "number.base": `'Id' debe ser un número entero`,
});

const nameRule = Joi.string().min(4).max(50).messages({
  "string.base": `'Nombre' debe ser un tipo de 'texto'`,
  "string.empty": `'Nombre' no puede ser un campo vacío`,
  "string.min": `'Nombre' debe tener una longitud mínima de {#limit}`,
  "string.max": `'Nombre' debe tener una longitud máxima de {#limit}`,
});

const lastNameRule = Joi.string().min(4).max(50).messages({
  "string.base": `'Apellido' debe ser un tipo de 'texto'`,
  "string.empty": `'Apellido' no puede ser un campo vacío`,
  "string.min": `'Apellido' debe tener una longitud mínima de {#limit}`,
  "string.max": `'Apellido' debe tener una longitud máxima de {#limit}`,
});

const documentTypeRule = Joi.number().integer().messages({
  "number.base": `'Tipo de documento' debe ser un número entero`,
});

const documentNumberRule = Joi.number().integer().messages({
  "number.base": `'Número de documento' debe ser un número entero`,
});

const dateBirthdayRule = Joi.date().max("now").messages({
  "date.base": `'Fecha de Nacimiento' debe ser una fecha`,
  "date.timestamp.max": `'Fecha de Nacimiento' debe ser anterior o igual a la fecha actual`,
});

const stateRule = Joi.number().integer().messages({
  "number.base": `'Estado' debe ser un número entero`,
});

const enabledRule = Joi.boolean().messages({
  "boolean.base": `Habilitado" debe ser un tipo de 'booleano'`,
});

const dateCreatedRule = Joi.date().allow(null).messages({
  "date.base": `'Fecha de Creación' debe ser una fecha`,
});

const userCreatedRule = Joi.string().max(50).allow(null).messages({
  "string.base": `'Usuario de Creación' debe ser un tipo de 'texto'`,
  "string.max": `'Usuario de Creación' debe tener una longitud máxima de {#limit}`,
});

const dateUpdateRule = Joi.date().allow(null).messages({
  "date.base": `'Fecha de Actualización' debe ser una fecha`,
});

const userUpdateRule = Joi.string().max(50).allow(null).messages({
  "string.base": `'Usuario de Actualización' debe ser un tipo de 'texto'`,
  "string.max": `'Usuario de Actualización' debe tener una longitud máxima de {#limit}`,
});

const getPersonSchema = Joi.object({
  Id: idRule.required(),
});

const createPersonsSchema = Joi.object({
  Name: nameRule.required(),
  LastName: lastNameRule.required(),
  DocumentType: documentTypeRule.required(),
  DocumentNumber: documentNumberRule.required(),
  DateBirthday: dateBirthdayRule.required(),
  State: stateRule.required(),
  Enabled: enabledRule.required(),
  DateCreated: dateCreatedRule,
  UserCreated: userCreatedRule,
});

const updatePersonSchema = Joi.object({
  Name: nameRule,
  LastName: lastNameRule,
  DocumentType: documentTypeRule,
  DocumentNumber: documentNumberRule,
  DateBirthday: dateBirthdayRule,
  State: stateRule,
  DateUpdate: dateUpdateRule,
  UserUpdate: userUpdateRule,
});

const deletePersonSchema = Joi.object({
  Enabled: enabledRule,
  DateUpdate: dateUpdateRule,
  UserUpdate: userUpdateRule,
});

module.exports = {
  getPersonSchema,
  createPersonsSchema,
  updatePersonSchema,
  deletePersonSchema,
};
