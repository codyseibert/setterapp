const Sequelize = require("sequelize");
const sequelize = require("../../sequelize");
// const Route = require("../../routes/models/route.model");

const Zone = sequelize.define("zone", {
  name: {
    type: Sequelize.STRING
  }
});

// Zone.hasMany(Route);

module.exports = Zone;
