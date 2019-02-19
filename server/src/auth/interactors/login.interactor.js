const login = require("../persistence/login.persistence");
const jwt = require("jsonwebtoken");

module.exports = async query => {
  const user = await login(query);
  if (!user) throw new Error("invalid login");
  const encoded = jwt.sign(user.toJSON(), process.env.JWT_SECRET || "abc");
  return {
    token: encoded,
    user: user
  };
};
