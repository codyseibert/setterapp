const Send = require("../models/send.model");

module.exports = send => {
  return Send.create(send);
};
