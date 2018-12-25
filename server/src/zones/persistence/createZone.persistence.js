const Zone = require("../models/zone.model");

module.exports = zone => {
  return Zone.create(zone);
};
