const deleteLike = require("../interactors/deleteLike.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "likeId");
  handler(req, res, () => deleteLike(req.params.likeId));
};
