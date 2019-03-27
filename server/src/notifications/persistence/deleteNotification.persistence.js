const Notification = require("../models/notification.model");

module.exports = notificationId => {
  return Notification.destroy({
    where: {
      id: notificationId
    }
  });
};
