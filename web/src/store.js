import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./reducers/rootReducer";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  return createStore(
    createRootReducer(history),
    initialState,
    compose(
      applyMiddleware(thunk),
      /* eslint-disable no-underscore-dangle */
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
      /* eslint-enable */
    )
  );
}
