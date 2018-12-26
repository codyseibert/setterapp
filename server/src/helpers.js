module.exports = async (req, res, fun) => {
  try {
    const result = await fun();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
