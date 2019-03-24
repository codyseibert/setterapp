const getUsers = require("../interactors/getUsers.interactor");

module.exports = async (req, res) => {
  try {
    if (req.query.gymId) req.query.gymId = parseInt(req.query.gymId); // TODO: the UI should sent an int instead of parsing the string
    const result = await getUsers(req.query);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
};
