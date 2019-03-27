const deleteRoute = require("../persistence/deleteRoute.persistence");

module.exports = routeId => {
  return deleteRoute(routeId);
};
