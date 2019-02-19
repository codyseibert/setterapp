exports.extractUserIdFromReqHeaders = req => {
  const authorization = req.headers.authorization || req.headers.Authorization;
  if (!authorization) throw new Error("authorization header not provided");
  const [bearer, token] = authorization.split(" ");
  if (!token || !bearer) throw new Error("invalid authorization header");
  return token;
};

module.exports = async (req, res, fun) => {
  try {
    const result = await fun();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};
