const Comment = require("../models/comment.model");

module.exports = commentId => {
  return Comment.destroy({
    where: {
      id: commentId
    }
  });
};
