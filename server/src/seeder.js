const createGym = require("./gyms/interactors/createGym.interactor");
const createZone = require("./zones/interactors/createZone.interactor");
const createRoute = require("./routes/interactors/createRoute.interactor");
const createUser = require("./users/interactors/createUser.interactor");
const createNotification = require("./notifications/interactors/createNotification.interactor");
const createComment = require("./comments/interactors/createComment.interactor");
const createSetter = require("./setters/interactors/createSetter.interactor");
const createSend = require("./sends/interactors/createSend.interactor");

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

  createZone({
    name: "Wall B",
    gymId: 1
  });

  createSend({
    userId: 1,
    routeId: 1,
    routeName: "gg",
    userName: "Cody Seibert",
    grade: "v8",
    zoneName: "gray wall"
  });

  createSend({
    userId: 2,
    routeId: 1,
    routeName: "gg",
    userName: "Cody Seibert",
    grade: "v8",
    zoneName: "gray wall"
  });

  createSend({
    userId: 3,
    routeId: 1,
    routeName: "gg",
    userName: "Cody Seibert",
    grade: "v8",
    zoneName: "gray wall"
  });

  createSend({
    userId: 4,
    routeId: 1,
    routeName: "gg",
    userName: "Cody Seibert",
    grade: "v8",
    zoneName: "gray wall"
  });

  createSend({
    userId: 5,
    routeId: 1,
    routeName: "gg",
    userName: "Cody Seibert",
    grade: "v8",
    zoneName: "gray wall"
  });

  createRoute({
    name: "Route A",
    zoneId: 1,
    gymId: 1,
    grade: "v8",
    zone: "Gray Wall",
    color: "Orange",
    type: "bouldering"
  });

  createRoute({
    name: "Cool Beans",
    zoneId: 1,
    gymId: 1,
    grade: "5.11a",
    zone: "2",
    type: "lead",
    color: "Blue"
  });

  createRoute({
    name: "Cool Beans",
    zoneId: 1,
    gymId: 1,
    grade: "V11",
    zone: "2",
    type: "bouldering",
    color: "Blue"
  });

  createRoute({
    name: "Route A",
    zoneId: 2,
    gymId: 1,
    grade: "5.10",
    type: "toprope",
    zone: "Gray Wall",
    color: "Pink"
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

  createComment({
    routeId: 1,
    message: "yolo",
    userId: 1
  });

  createSetter({
    name: "Mark Mercer",
    gymId: 1
  });
};
