const User = require("../models/user.model");

module.exports = async params => {
  return await User.findAll({
    where: params
  });
};
