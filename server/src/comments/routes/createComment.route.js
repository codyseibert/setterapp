const createComment = require("../interactors/createComment.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => createComment(req.body));
};
