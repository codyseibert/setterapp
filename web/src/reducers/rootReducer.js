import { combineReducers } from "redux";
import formReducer from "./form.reducer";
import userReducer from "./user.reducer";
import gymReducer from "./gym.reducer";
import tokenReducer from "./token.reducer";
import routesReducer from "./routes.reducer";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    router: connectRouter(history),
    form: formReducer,
    user: userReducer,
    gym: gymReducer,
    token: tokenReducer,
    routes: routesReducer
  });
