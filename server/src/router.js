module.exports = app => {
  app.get("/v1/gyms", require("./gyms/routes/getGyms.route"));
  app.get("/v1/gyms/:gymId", require("./gyms/routes/getGym.route"));
  app.post("/v1/gyms", require("./gyms/routes/createGyms.route"));

  app.post("/v1/routes", require("./routes/routes/createRoute.route"));
  app.get("/v1/routes", require("./routes/routes/getRoutes.route"));

  app.post("/v1/users", require("./users/routes/createUser.route"));

  app.get("/v1/zones", require("./zones/routes/getZones.route"));
  app.post("/v1/zones", require("./zones/routes/createZone.route"));

  app.post("/v1/login", require("./auth/routes/login.route"));

  app.post(
    "/v1/gym-admins",
    require("./gym-admins/routes/addUserAsGymAdmin.route")
  );
};
