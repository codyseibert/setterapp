const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const Setter = sequelize.define("setter", {
  name: { type: Sequelize.STRING },
  gymId: { type: Sequelize.INTEGER },
  active: { type: Sequelize.BOOLEAN, defaultValue: true }
});

module.exports = Setter;
