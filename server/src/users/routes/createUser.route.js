const createUser = require("../interactors/createUser.interactor");

module.exports = async (req, res) => {
  try {
    const result = await createUser(req.query);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
};
