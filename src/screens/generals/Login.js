import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Alert } from '@material-ui/lab'
import { Button, Card, CardContent, Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from '../../context/auth'
import { useForm, LOGIN_USER } from '../../utils'

const BackgroundIMG = 'https://cutewallpaper.org/21/wallpaper-gif-1920x1080/Space-Stars-Black-Background-Gif-1920x1080-Star-.gif'

const useStyles = makeStyles(theme => ({
  card: {
    overflow: "visible"
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  background: {
    backgroundImage: `radial-gradient(circle, rgba(51,23,64,0.5662640056022409) 0%, rgba(21,11,27,0.7203256302521008) 100%), url(${BackgroundIMG})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center"
  },
  wrapper: {
    flex: "none",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto"
  },
  fullWidth: {
    width: "100%"
  },
  logo: {
    display: "flex",
    flexDirection: "column"
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  title: {
    fontWeight: "bold"
  }
}))

export const Login = (props) => {
  const classes = useStyles()
  const context = useContext(AuthContext)
  const [errors, setErrors] = useState({})
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: '',
    password: ''
  })
  const [loginUser] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } } ){
      context.login(userData)
      props.history.push('/s')
    },
    onError(err){
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
    variables: values
  })

  function loginUserCallback(){
    loginUser()
  }

  const input1 = 'Usuario'

  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
              <form onSubmit={onSubmit} noValidate>
                <div className={classNames(classes.logo, `text-xs-center pb-xs`)}>
                  <Typography variant="h4" className={classes.title}>
                    STELAR
                  </Typography>
                  <Typography variant="caption">
                    Inicie sesión con su ID de aplicación para continuar.
                  </Typography>
                </div>
                <TextField
                  id="username"
                  label={input1}
                  className={classes.textField}
                  fullWidth
                  margin="normal"

                  autoComplete="username" name="username"
                  placeholder={input1}
                  aria-label="Username" aria-describedby="username"
                  value={values.username}
                  onChange={onChange} 
                  required
                />

                <TextField
                  id="password"
                  label="Contraseña"
                  className={classes.textField}
                  type="password"
                  fullWidth
                  margin="normal"

                  autoComplete="current-password" name="password"
                  placeholder="Contraseña"
                  aria-label="Password" aria-describedby="password"
                  value={values.password}
                  onChange={onChange}
                  required
                />
                <FormControlLabel
                  control={<Checkbox value="checkedA" />}
                  label="Maneter mi sesión iniciada"
                  className={classes.fullWidth}
                />
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Ingresar
                </Button>
                <div className="pt-1 text-md-center">
                  <Link to="/forgot">
                    <Button>¿Olvidó su contraseña?</Button>
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="pt-1 text-md-center">
            {Object.keys(errors).length > 0 && (
              <div className={classes.alert}>
                {Object.values(errors).map((value) => (
                  <Alert severity="warning" key={value}>{value}</Alert>
                ))}
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}