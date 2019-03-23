const getRoutes = require("../persistence/getRoutes.persistence");

module.exports = params => {
  return getRoutes(params);
};
