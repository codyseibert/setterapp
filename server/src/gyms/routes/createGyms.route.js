const createGym = require('../interactors/createGym.interactor');

module.exports = async (req, res) => {
  try {
    const result = await createGym({
      gym: req.body,
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
  
}