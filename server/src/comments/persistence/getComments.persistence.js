const Comment = require("../models/comment.model");

module.exports = params => {
  return Comment.findAll({
    where: params
  });
};
