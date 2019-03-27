const archiveRoute = require("../persistence/archiveRoute.persistence");

module.exports = routeId => {
  return archiveRoute(routeId);
};
