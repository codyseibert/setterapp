const createGym = require("./gyms/interactors/createGym.interactor");
const createZone = require("./zones/interactors/createZone.interactor");
const createRoute = require("./routes/interactors/createRoute.interactor");
const createUser = require("./users/interactors/createUser.interactor");

module.exports = () => {
  createGym({
    name: "Aiguille"
  });

  createZone({
    name: "Wall A",
    gymId: 1
  });

  createRoute({
    name: "Route A",
    zoneId: 1
  });

  createUser({
    email: "testing@example.com",
    password: "123456"
  });
};
