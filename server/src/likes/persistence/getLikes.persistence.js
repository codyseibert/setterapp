const Like = require("../models/like.model");

module.exports = params => {
  return Like.findAll({
    where: params
  });
};
