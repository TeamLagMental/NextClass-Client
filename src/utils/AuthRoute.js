import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './../context/auth'

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={ (props) => user ? <Redirect to="/dashboard" /> : <Component {...props} /> }
    />
  )
}

export const PrivateAccessRoute = ({ component: Component, aId, ...rest }) => {
  const { user } = useContext(AuthContext)
  
  return (
    <Route
      {...rest}
      render = { props =>
        user ?
          user.access_id >= aId ?
          <Component { ...props } />
        :
          <Redirect to="/dashboard" />
        :
          <Redirect to="/login" />
      }
    />
  )
}

//export default AuthRoute