const getSetter = require("../interactors/getSetter.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "setterId");
  handler(req, res, () => getSetter(req.params.setterId));
};
