const createSend = require("../interactors/createSend.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  if (req.query.gymId) req.query.gymId = parseInt(req.query.gymId);
  handler(req, res, () => createSend(req.body));
};
