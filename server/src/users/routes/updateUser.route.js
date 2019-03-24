const updateUser = require("../interactors/updateUser.interactor");
const { toInt } = require("../../helpers");

module.exports = async (req, res) => {
  try {
    toInt(req.params, "userId");
    const result = await updateUser(req.params.userId, req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
};
