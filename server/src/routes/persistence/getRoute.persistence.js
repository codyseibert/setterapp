const Route = require("../models/route.model");

module.exports = async routeId => {
  return await Route.findByPk(routeId);
};
