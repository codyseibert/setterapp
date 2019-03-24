const getRoute = require("../persistence/getRoute.persistence");

module.exports = async routeId => {
  return await getRoute(routeId);
};
