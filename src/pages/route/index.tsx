import React from 'react'
import { Route, Redirect, Switch, Router } from 'react-router-dom';


const BaseLayout = () => import('../../components/Layout/BaseLayOut')

export default () => (
  <Router>
    <Switch>
      <Route path="/" render={() => <Redirect to="/index" />} exact key="first" />
      <Route path="/index" 
        component={BaseLayout} 
        key="app" 
       />
    </Switch>
  </Router>  
)
