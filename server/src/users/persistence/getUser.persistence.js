const User = require("../models/user.model");

module.exports = async userId => {
  return (await User.findByPk(userId)).toJSON();
};
