const getGym = require("../interactors/getGym.interactor");

module.exports = async (req, res) => {
  try {
    const result = await getGym(req.params.gymId);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
};
