const getGyms = require('../persistence/getGyms.persistence');

module.exports = (gym) => {
  return getGyms();
}