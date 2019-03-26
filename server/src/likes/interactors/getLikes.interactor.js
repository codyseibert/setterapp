const getLikes = require("../persistence/getLikes.persistence");

module.exports = params => {
  return getLikes(params);
};
