const Sequelize = require('sequelize');
const sequelize = require('../../sequelize');

const Route = sequelize.define('route', {
  name: {
    type: Sequelize.STRING
  },
});

module.exports = Route;