const createZone = require('../persistence/createZone.persistence');

module.exports = (zone) => {
  return createZone(zone);
}