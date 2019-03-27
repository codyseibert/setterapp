module.exports = app => {
  app.get("/v1/gyms", require("./gyms/routes/getGyms.route"));
  app.get("/v1/gyms/:gymId", require("./gyms/routes/getGym.route"));
  app.post("/v1/gyms", require("./gyms/routes/createGyms.route"));

  app.get(
    "/v1/notifications",
    require("./notifications/routes/getNotifications.route")
  );
  app.post(
    "/v1/notifications",
    require("./notifications/routes/createNotification.route")
  );
  app.delete(
    "/v1/notifications/:notificationId",
    require("./notifications/routes/deleteNotification.route")
  );

  app.post("/v1/sends", require("./sends/routes/createSend.route"));
  app.get("/v1/sends", require("./sends/routes/getSends.route"));
  app.delete("/v1/sends/:sendId", require("./sends/routes/deleteSend.route"));

  app.post("/v1/routes", require("./routes/routes/createRoute.route"));
  app.get("/v1/routes", require("./routes/routes/getRoutes.route"));
  app.get("/v1/routes/:routeId", require("./routes/routes/getRoute.route"));
  app.post(
    "/v1/routes/:routeId/archive",
    require("./routes/routes/archiveRoute.route")
  );
  app.delete(
    "/v1/routes/:routeId",
    require("./routes/routes/deleteRoute.route")
  );

  app.post("/v1/users", require("./users/routes/createUser.route"));
  app.patch("/v1/users/:userId", require("./users/routes/updateUser.route"));
  app.get("/v1/users", require("./users/routes/getUsers.route"));
  app.get("/v1/users/:userId", require("./users/routes/getUser.route"));

  app.get("/v1/zones", require("./zones/routes/getZones.route"));
  app.get("/v1/zones/:zoneId", require("./zones/routes/getZone.route"));
  app.post("/v1/zones", require("./zones/routes/createZone.route"));

  app.post("/v1/login", require("./auth/routes/login.route"));

  app.get("/v1/comments", require("./comments/routes/getComments.route"));
  app.post("/v1/comments", require("./comments/routes/createComment.route"));
  app.delete(
    "/v1/comments/:commentId",
    require("./comments/routes/deleteComment.route")
  );

  app.get("/v1/likes", require("./likes/routes/getLikes.route"));
  app.delete("/v1/likes/:likeId", require("./likes/routes/deleteLike.route"));
  app.post("/v1/likes", require("./likes/routes/createLike.route"));

  app.post(
    "/v1/gym-admins",
    require("./gym-admins/routes/addUserAsGymAdmin.route")
  );
};
