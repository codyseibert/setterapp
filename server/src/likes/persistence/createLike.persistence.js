const Like = require("../models/like.model");

module.exports = like => {
  return Like.create(like);
};
