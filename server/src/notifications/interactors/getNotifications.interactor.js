const getNotifications = require("../persistence/getNotifications.persistence");

module.exports = params => {
  return getNotifications(params);
};
