import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from './../context/auth'

export const AuthRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext)
  return (
    <Route
      {...rest}
      render={ (props) => user ? <Redirect to="/s" /> : <Component {...props} /> }
    />
  )
}

export const PrivateAccessRoute = ({ component: Component, aId, ...rest }) => {
  const { user } = useContext(AuthContext)

  /*
  if(user){
    return (
      <Route
        {...rest}
        render={ (props) => user.ranks.includes(aId) ? <Component {...props} /> : <Redirect to="/s" /> }
      />
    )
  } else {
    return (
      <Route {...rest} render={ () => <Redirect to="/login" /> }/>
    )
  }*/
  
  return (
    <Route
      {...rest}
      render = { props =>
        user ?
          user.ranks.includes(aId) ? <Component {...props} /> : <Redirect to="/s" />
        :
          <Redirect to="/login" />
      }
    />
  )
  
}