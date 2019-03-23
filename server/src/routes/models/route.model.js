const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");

const Route = sequelize.define("route", {
  name: { type: Sequelize.STRING },
  gymId: { type: Sequelize.INTEGER },
  type: { type: Sequelize.STRING },
  grade: { type: Sequelize.STRING },
  color: { type: Sequelize.STRING }
});

module.exports = Route;
