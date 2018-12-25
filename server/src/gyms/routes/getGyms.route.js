const getGyms = require('../interactors/getGyms.interactor');

module.exports = async (req, res) => {
  try {
    const result = await getGyms()
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
  
}