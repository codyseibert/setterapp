const deleteRoute = require("../interactors/deleteRoute.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "routeId");
  handler(req, res, () => deleteRoute(req.params.routeId));
};
