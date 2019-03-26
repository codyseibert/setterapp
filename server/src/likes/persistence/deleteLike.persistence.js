const Like = require("../models/like.model");

module.exports = likeId => {
  return Like.destroy({
    where: {
      id: likeId
    }
  });
};
