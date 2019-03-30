const updateSetter = require("../persistence/updateSetter.persistence");

module.exports = (userId, properties) => {
  return updateSetter(userId, properties);
};
