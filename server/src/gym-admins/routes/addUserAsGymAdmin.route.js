const addUserAsGymAdmin = require("../interactors/addUserAsGymAdmin.interactor");
const handler = require("../../helpers");

module.exports = async (req, res) => {
  handler(req, res, () => addUserAsGymAdmin(req.body));
};
