const Gym = require('../models/gym.model');

module.exports = (gym) => {
  return Gym.findAll();
}