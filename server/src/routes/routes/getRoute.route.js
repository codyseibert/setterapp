const getRoute = require("../interactors/getRoute.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "routeId");
  handler(req, res, () => getRoute(req.params.routeId));
};
