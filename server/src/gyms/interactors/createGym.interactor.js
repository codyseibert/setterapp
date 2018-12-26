const createGym = require("../persistence/createGym.persistence");
const uuid = require("uuid/v4");

module.exports = gym => {
  return createGym({
    ...gym,
    adminCode: uuid()
  });
};
