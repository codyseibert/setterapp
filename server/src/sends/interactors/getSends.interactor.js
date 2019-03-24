const getSends = require("../persistence/getSends.persistence");

module.exports = params => {
  return getSends(params);
};
