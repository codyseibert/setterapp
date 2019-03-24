const createGym = require("../interactors/createGym.interactor");
const { handler } = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => createGym(req.body));
};
