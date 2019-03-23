const createRoute = require("../interactors/createRoute.interactor");
const handler = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => createRoute(req.body));
};
