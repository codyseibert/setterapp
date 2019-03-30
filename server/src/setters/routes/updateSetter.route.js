const updateSetter = require("../interactors/updateSetter.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "setterId");
  handler(req, res, () => updateSetter(req.params.setterId, req.body));
};
