const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const Notification = sequelize.define("notification", {
  gymId: { type: Sequelize.INTEGER },
  message: { type: Sequelize.STRING }
});

module.exports = Notification;
