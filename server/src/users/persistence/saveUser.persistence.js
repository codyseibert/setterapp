const User = require("../models/user.model");

module.exports = user => {
  return User.update(user, {
    where: {
      id: user.id
    }
  });
};
