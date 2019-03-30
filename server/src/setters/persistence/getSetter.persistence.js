const Setter = require("../models/setter.model");

module.exports = async setterId => {
  console.log("setterId", setterId);
  return await Setter.findByPk(setterId);
};
