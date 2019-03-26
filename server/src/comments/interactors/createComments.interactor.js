const createComment = require("../persistence/createComment.persistence");

module.exports = async comment => {
  return await createComment(comment);
};
