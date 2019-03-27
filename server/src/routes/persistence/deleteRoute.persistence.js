const Route = require("../models/route.model");

module.exports = routeId => {
  return Route.destroy({
    where: {
      id: routeId
    }
  });
};
