import { combineReducers } from "redux";
import formReducer from "./form.reducer";
import userReducer from "./user.reducer";
import gymReducer from "./gym.reducer";
import tokenReducer from "./token.reducer";
import routesReducer from "./routes.reducer";
import zoneReducer from "./zone.reducer";
import zonesReducer from "./zones.reducer";
import loadingReducer from "./loading.reducer";
import alertReducer from "./alert.reducer";
import routeReducer from "./route.reducer";
import usersReducer from "./users.reducer";
import profileReducer from "./profile.reducer";
import gymsReducer from "./gyms.reducer";
import commentsReducer from "./comments.reducer";
import sendsReducer from "./sends.reducer";
import notificationsReducer from "./notifications.reducer";

import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    user: userReducer,
    gym: gymReducer,
    token: tokenReducer,
    routes: routesReducer,
    zone: zoneReducer,
    zones: zonesReducer,
    loading: loadingReducer,
    alert: alertReducer,
    users: usersReducer,
    route: routeReducer,
    gyms: gymsReducer,
    comments: commentsReducer,
    sends: sendsReducer,
    notifications: notificationsReducer,
    profile: profileReducer
  });
