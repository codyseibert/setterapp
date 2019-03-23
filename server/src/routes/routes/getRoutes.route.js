const getRoutes = require("../interactors/getRoutes.interactor");
const handler = require("../../helpers");

module.exports = async (req, res) => {
  req.query.gymId = parseInt(req.query.gymId);
  handler(req, res, () => getRoutes(req.query));
};
