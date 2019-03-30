const getSetters = require("../persistence/getSetters.persistence");

module.exports = params => {
  return getSetters(params);
};
