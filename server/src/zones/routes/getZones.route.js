const getZones = require('../interactors/getZones.interactor');

module.exports = async (req, res) => {
  try {
    const result = await getZones(req.query)
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
  
}