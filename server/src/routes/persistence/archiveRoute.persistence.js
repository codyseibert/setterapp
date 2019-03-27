const Route = require("../models/route.model");

module.exports = routeId => {
  return Route.update(
    { archived: true },
    {
      where: {
        id: routeId
      }
    }
  );
};
