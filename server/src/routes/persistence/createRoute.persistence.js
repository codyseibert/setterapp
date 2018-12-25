const Route = require('../models/route.model');

module.exports = (route) => {
  return Route.create(route);
}