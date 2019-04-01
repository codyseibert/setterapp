const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const Send = sequelize.define("send", {
  userId: { type: Sequelize.INTEGER },
  routeId: { type: Sequelize.INTEGER },
  grade: { type: Sequelize.STRING },
  userName: { type: Sequelize.STRING },
  routeName: { type: Sequelize.STRING },
  zoneName: { type: Sequelize.STRING }
});

module.exports = Send;
