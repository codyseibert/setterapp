const archiveRoute = require("../interactors/archiveRoute.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "routeId");
  handler(req, res, () => archiveRoute(req.params.routeId));
};
