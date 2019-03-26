const createComments = require("../interactors/createComments.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => createComments(req.body));
};
