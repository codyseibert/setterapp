const getSends = require("../interactors/getSends.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  if (req.query.userId) req.query.userId = parseInt(req.query.userId);
  handler(req, res, () => getSends(req.query));
};
