const createGym = require('../persistence/createGym.persistence');

module.exports = (gym) => {
  return createGym(gym);
}