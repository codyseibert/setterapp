const Send = require("../models/send.model");

module.exports = params => {
  return Send.findAll({
    where: params
  });
};
