const createLike = require("../interactors/createLike.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => createLike(req.body));
};
