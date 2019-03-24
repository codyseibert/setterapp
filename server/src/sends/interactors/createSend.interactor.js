const createSend = require("../persistence/createSend.persistence");

module.exports = params => {
  return createSend(params);
};
