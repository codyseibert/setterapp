const deleteNotification = require("../interactors/deleteNotification.interactor");
const { handler, toInt } = require("../../helpers");

module.exports = async (req, res) => {
  toInt(req.params, "notificationId");
  handler(req, res, () => deleteNotification(req.params.notificationId));
};
