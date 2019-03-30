const createSetter = require("../persistence/createSetter.persistence");

module.exports = setter => {
  return createSetter(setter);
};
