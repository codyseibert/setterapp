const User = require("../../users/models/user.model");

module.exports = query => {
  return User.findOne({
    where: {
      email: query.email,
      password: query.password
    }
  });
};
