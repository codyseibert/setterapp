const createNotification = require("../interactors/createNotification.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => createNotification(req.body));
};
