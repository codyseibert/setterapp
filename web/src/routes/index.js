import React from 'react'
import { Route, Switch } from 'react-router'
import Hello from '../components/Hello'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Hello} />
      <Route component={Hello} />
    </Switch>
  </div>
)

export default routes