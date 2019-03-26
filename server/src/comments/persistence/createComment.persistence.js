const Comment = require("../models/comment.model");

module.exports = comment => {
  return Comment.create(comment);
};
