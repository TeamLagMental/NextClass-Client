import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Routes from './Routes'
import { AuthProvider } from './context/auth'
import { AuthRoute, PrivateAccessRoute } from './utils'

class App extends Component {
  render(){
    return (
      <AuthProvider>
        <Router>
          <div>
            {Routes.map((route, index) => {
              if(route.authRoute === true){
                return (
                  <AuthRoute
                    key={index}
                    path={route.path}
                    strict
                    exact={route.exact}
                    component={(props => {
                      return (
                        <route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>
                      )
                    })}
                  />
                )
              } else if(route.privateAccessRoute === true){
                return (
                  <PrivateAccessRoute
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    aId={route.aId}
                    strict
                    component={(props => {
                      return (
                        <route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>
                      )
                    })}
                  />
                )
              } else if(route.authRoute !== true && route.privateAccessRoute !== true){
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={(props => {
                      return (
                        <route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>
                      )
                    })}
                  />
                )
              } else {
                return console.log("error")
              }
            })}
          </div>
        </Router>
      </AuthProvider>
    )
  }
}

export default App