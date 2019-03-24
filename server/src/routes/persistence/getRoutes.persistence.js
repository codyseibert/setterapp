const Route = require("../models/route.model");

module.exports = params => {
  return Route.findAll({
    where: params
  });
};
