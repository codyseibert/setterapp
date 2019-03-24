const createGym = require("./gyms/interactors/createGym.interactor");
const createZone = require("./zones/interactors/createZone.interactor");
const createRoute = require("./routes/interactors/createRoute.interactor");
const createUser = require("./users/interactors/createUser.interactor");
const createNotification = require("./notifications/interactors/createNotification.interactor");

module.exports = () => {
  createGym({
    name: "Aiguille Rock Climbing Center"
  });

  createGym({
    name: "Vertical Ventures, Tampa"
  });

  createGym({
    name: "Vertical Ventures, St Pete"
  });

  createZone({
    name: "Wall A",
    gymId: 1
  });

  createRoute({
    name: "Route A",
    zoneId: 1,
    gymId: 1
  });

  createUser({
    email: "testing@example.com",
    password: "123456",
    name: "Cody Seibert",
    gymId: 1
  });

  createNotification({
    gymId: 1,
    message: "The gym will be closing at 7PM this coming Friday."
  });
};
