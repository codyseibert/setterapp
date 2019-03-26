const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const Like = sequelize.define("like", {
  routeId: {
    type: Sequelize.INTEGER
  },
  userId: {
    type: Sequelize.INTEGER
  }
});

module.exports = Like;
