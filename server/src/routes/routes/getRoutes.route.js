const getRoutes = require("../interactors/getRoutes.interactor");
const { handler, toInt, toBoolean } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.query, "gymId");
  toInt(req.query, "zoneId");
  toBoolean(req.query, "archived");
  handler(req, res, () => getRoutes(req.query));
};
