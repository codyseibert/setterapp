const Send = require("../models/send.model");

module.exports = sendId => {
  return Send.destroy({
    where: {
      id: sendId
    }
  });
};
