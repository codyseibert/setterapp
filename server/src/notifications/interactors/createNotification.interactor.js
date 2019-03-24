const createNotification = require("../persistence/createNotification.persistence");

module.exports = route => {
  return createNotification(route);
};
