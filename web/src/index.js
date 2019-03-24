import { AppContainer } from "react-hot-loader";
import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rootReducer from "./reducers/rootReducer";
import history from "./history";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIgloo,
  faSync,
  faSpinner,
  faHome,
  faTh,
  faRoute,
  faUsers
} from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo, faSync, faSpinner, faHome, faTh, faRoute, faUsers);

const getInitialState = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const token = JSON.parse(window.localStorage.getItem("token"));
  return {
    gym: {},
    routes: [],
    user,
    token
  };
};

/* eslint-disable no-underscore-dangle */
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */
const store = createStore(
  rootReducer(history),
  getInitialState(),
  composeEnhancer(applyMiddleware(thunk, routerMiddleware(history)))
);

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
};

render();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept("./App", () => {
    render();
  });

  // Reload reducers
  module.hot.accept("./reducers/rootReducer", () => {
    store.replaceReducer(rootReducer(history));
  });
}
