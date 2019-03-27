const deleteComment = require("../interactors/deleteComment.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "commentId");
  handler(req, res, () => deleteComment(req.params.commentId));
};
