const deleteLike = require("../persistence/deleteLike.persistence");

module.exports = likeId => {
  return deleteLike(likeId);
};
