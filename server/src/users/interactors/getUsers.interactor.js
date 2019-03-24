const getUsers = require("../persistence/getUsers.persistence");

module.exports = params => {
  return getUsers(params);
};
