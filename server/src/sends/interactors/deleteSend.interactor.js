const deleteSend = require("../persistence/deleteSend.persistence");

module.exports = sendId => {
  return deleteSend(sendId);
};
