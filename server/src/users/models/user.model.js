const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const User = sequelize.define("user", {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  adminOf: {
    type: Sequelize.INTEGER
  }
});

module.exports = User;
