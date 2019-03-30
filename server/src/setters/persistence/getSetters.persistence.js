const Setter = require("../models/setter.model");

module.exports = params => {
  return Setter.findAll({
    where: params
  });
};
