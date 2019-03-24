const Notification = require("../models/notification.model");

module.exports = params => {
  return Notification.findAll({
    where: params
  });
};
