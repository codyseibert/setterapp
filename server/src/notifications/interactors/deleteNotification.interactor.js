const deleteNotification = require("../persistence/deleteNotification.persistence");

module.exports = notificationId => {
  return deleteNotification(notificationId);
};
