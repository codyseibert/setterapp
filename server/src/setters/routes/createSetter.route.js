const createSetter = require("../interactors/createSetter.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => createSetter(req.body));
};
