const User = require("../models/user.model");

module.exports = user => {
  return User.create(user);
};
