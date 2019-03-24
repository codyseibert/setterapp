const User = require("../models/user.model");

module.exports = (userId, properties) => {
  User.update(properties, {
    where: {
      id: userId
    }
  });
  return {
    message: "success"
  };
};
