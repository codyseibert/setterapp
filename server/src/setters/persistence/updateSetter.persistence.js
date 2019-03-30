const Setter = require("../models/setter.model");

module.exports = (setterId, properties) => {
  Setter.update(properties, {
    where: {
      id: setterId
    }
  });
  return {
    message: "success"
  };
};
