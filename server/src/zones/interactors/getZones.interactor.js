const getZones = require('../persistence/getZones.persistence');

module.exports = (query) => {
  return getZones(query);
}