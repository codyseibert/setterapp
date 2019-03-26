const getComments = require("../interactors/getComments.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.query, "routeId");
  handler(req, res, () => getComments(req.query));
};
