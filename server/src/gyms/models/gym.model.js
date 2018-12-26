const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");
const Zone = require("../../zones/models/zone.model");

const Gym = sequelize.define("gym", {
  name: {
    type: Sequelize.STRING
  },
  adminCode: {
    type: Sequelize.STRING
  }
});

Gym.hasMany(Zone);

module.exports = Gym;
