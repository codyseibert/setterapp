const deleteSend = require("../interactors/deleteSend.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "sendId");
  handler(req, res, () => deleteSend(req.params.sendId));
};
