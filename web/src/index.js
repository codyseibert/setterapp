import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import rootReducer from './reducers/rootReducer'

const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      thunk,
      routerMiddleware(history),
    ),
  ),
)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers/rootReducer', () => {
    store.replaceReducer(rootReducer(history))
  })
}