const getSetters = require("../interactors/getSetters.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.query, "gymId");
  handler(req, res, () => getSetters(req.query));
};
