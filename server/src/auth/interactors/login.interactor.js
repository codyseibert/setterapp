const login = require("../persistence/login.persistence");

module.exports = async query => {
  const user = await login(query);
  if (!user) throw new Error("invalid login");
  return user;
};
