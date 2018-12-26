const login = require("../interactors/login.interactor");
const handler = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => login(req.body));
};
