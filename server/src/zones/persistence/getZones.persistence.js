const Zone = require("../models/zone.model");

module.exports = query => {
  return Zone.findAll({
    where: query
  });
};
