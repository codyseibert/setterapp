module.exports = app => {
  app.get("/v1/gyms", require("./gyms/routes/getGyms.route"));
  app.post("/v1/gyms", require("./gyms/routes/createGyms.route"));

  app.get("/v1/zones", require("./zones/routes/getZones.route"));
};
