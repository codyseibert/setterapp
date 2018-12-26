const getGym = require("../../gyms/persistence/getGym.persistence");
const getUser = require("../../users/persistence/getUser.persistence");
const saveUser = require("../../users/persistence/saveUser.persistence");

module.exports = async info => {
  const gym = await getGym(info.gymId);
  const adminCode = gym.adminCode;
  if (info.adminCode !== adminCode) throw new Error("invalid admin code");
  const user = await getUser(info.userId);
  user.adminOf = gym.id;
  await saveUser(user);
};
