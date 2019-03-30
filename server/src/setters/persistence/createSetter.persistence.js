const Setter = require("../models/setter.model");

module.exports = setter => {
  return Setter.create(setter);
};
