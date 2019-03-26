const getLikes = require("../interactors/getLikes.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.query, "routeId");
  toInt(req.query, "userId");
  handler(req, res, () => getLikes(req.query));
};
