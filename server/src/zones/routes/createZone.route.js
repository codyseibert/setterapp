const createZone = require("../interactors/createZone.interactor");

module.exports = async (req, res) => {
  try {
    const result = await createZone(req.body);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
};
