const Notification = require("../models/notification.model");

module.exports = notification => {
  return Notification.create(notification);
};
