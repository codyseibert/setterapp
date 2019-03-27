const getRoutes = require("../interactors/getRoutes.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  if (req.query.gymId) req.query.gymId = parseInt(req.query.gymId);
  if (req.query.zoneId) req.query.zoneId = parseInt(req.query.zoneId);
  if (req.query.archived) req.query.archived = req.query.archived === "true";
  handler(req, res, () => getRoutes(req.query));
};
