const getComments = require("../persistence/getComments.persistence");

module.exports = async params => {
  return await getComments(params);
};
