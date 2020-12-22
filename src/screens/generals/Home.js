import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Button, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
//import { useMutation } from '@apollo/react-hooks'
import { AuthContext } from './../../context/auth'

const BackgroundIMG = 'https://cutewallpaper.org/21/wallpaper-gif-1920x1080/Space-Stars-Black-Background-Gif-1920x1080-Star-.gif'

const useStyles = makeStyles(theme => ({
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
    title: {
        fontWeight: "bold",
        color: "white"
    },
    textColor: {
        color: "white"
    }
}))

export const Home = () => {
    const classes = useStyles()
    const { user } = useContext(AuthContext)
    return(
        <div className={classNames(classes.session, classes.background)}>
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" className={classes.title} gutterBottom>
                        eSTELAR
                    </Typography>
                    <Typography variant="h5" align="center" color="textPrimary" className={classes.textColor} paragraph>
                        Despega tu conocimiento...
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                {user ? (
                                    <Link to="/s" >
                                        <Button variant="contained" color="primary">
                                        <i className="fa fa-fw fa-rocket mr-1"></i> Ir al panel
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to="/login" >
                                        <Button variant="contained" color="primary">
                                        <i className="fa fa-fw fa-rocket mr-1"></i> Iniciar Sesión
                                        </Button>
                                    </Link>
                                )}
                            </Grid>
                        </Grid>
                    </div>

                </div>
            </div>
        </div>
    )
}