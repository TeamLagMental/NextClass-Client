import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import { AuthRoute, PrivateAccessRoute } from './utils'
import AppProvider from './components/dashboard/AppProvider'
import Routes from './Routes'

class App extends Component {
  render(){
    return (
      <AppProvider>
        <AuthProvider>
          <Router>
            <Switch>
              {Routes.map((route, index) => {
                return route.authRoute === true ? (
                    <AuthRoute key={index} exact path={route.path} component={route.component}/>
                ) : route.privateAccessRoute === true ? (
                    <PrivateAccessRoute key={index} path={route.path} aId={route.aId} component={route.component}/>
                ) : (
                  <Route key={index} exact path={route.path} component={route.component}/>
                )
              })}
            </Switch>
          </Router>
        </AuthProvider>
      </AppProvider>
    )
  }
}

export default App