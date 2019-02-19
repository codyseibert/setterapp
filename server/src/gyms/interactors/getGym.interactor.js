const getGym = require("../persistence/getGym.persistence");

module.exports = gymId => {
  return getGym(gymId);
};
