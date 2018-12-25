const createRoute = require('../persistence/createRoute.persistence');

module.exports = (route) => {
  return createRoute(route);
}