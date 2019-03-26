const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const Comment = sequelize.define("comment", {
  message: {
    type: Sequelize.STRING
  },
  userId: {
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING
  },
  routeId: {
    type: Sequelize.INTEGER
  }
});

module.exports = Comment;
