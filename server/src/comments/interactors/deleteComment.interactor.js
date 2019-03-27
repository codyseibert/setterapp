const deleteComment = require("../persistence/deleteComment.persistence");

module.exports = commentId => {
  return deleteComment(commentId);
};
