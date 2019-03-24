const getZones = require("../interactors/getZones.interactor");

module.exports = async (req, res) => {
  try {
    const result = await getZones({
      id: parseInt(req.params.zoneId)
    });
    res.status(200).json(result[0]);
  } catch (err) {
    res.status(400).send(err);
  }
};
