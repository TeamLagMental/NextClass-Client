import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Routes from './Routes'
import { AuthProvider } from './context/auth'
import { AuthRoute, PrivateAccessRoute } from './utils'
import AppProvider from './components/dashboard/AppProvider'

class App extends Component {
  render(){
    return (
      <AppProvider>
      <AuthProvider>
        <Router>
          <Switch>
            {Routes.map((route, index) => {
              if(route.authRoute === true){
                return (
                  <AuthRoute key={index} exact path={route.path} component={route.component}/>
                )
              } else if(route.privateAccessRoute === true){
                return (
                  <PrivateAccessRoute key={index} path={route.path} aId={route.aId} component={route.component}/>
                )
              } else {
                return (
                  <Route key={index} exact path={route.path} component={route.component}/>
                )
              }
            })}
          </Switch>
        </Router>
      </AuthProvider>
      </AppProvider>
    )
  }
}

export default App