const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const Send = sequelize.define("send", {
  userId: { type: Sequelize.INTEGER },
  routeId: { type: Sequelize.INTEGER }
});

module.exports = Send;
