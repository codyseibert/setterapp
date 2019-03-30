const getSetter = require("../persistence/getSetter.persistence");

module.exports = setterId => {
  return getSetter(setterId);
};
