const Gym = require("../models/gym.model");

module.exports = async gymId => {
  return (await Gym.findByPk(gymId)).toJSON();
};
