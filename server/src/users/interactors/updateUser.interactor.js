const updateUser = require("../persistence/updateUser.persistence");

module.exports = (userId, properties) => {
  return updateUser(userId, properties);
};
