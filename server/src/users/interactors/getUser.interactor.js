const getUser = require("../persistence/getUser.persistence");

module.exports = async userId => {
  return await getUser(userId);
};
