const createUser = require('../persistence/createUser.persistence');

module.exports = (user) => {
  return createUser(user);
}