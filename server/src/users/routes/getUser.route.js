const getUser = require("../interactors/getUser.interactor");
const { toInt } = require("../../helpers");

module.exports = async (req, res) => {
  try {
    toInt(req.params, "userId");
    const result = await getUser(req.params.userId);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.stack);
  }
};
