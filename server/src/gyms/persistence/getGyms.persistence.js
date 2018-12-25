const Gym = require("../models/gym.model");

module.exports = () => {
  return Gym.findAll();
};
