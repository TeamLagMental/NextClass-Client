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
        //backgroundColor: theme.palette.primary.main,
        backgroundImage: `radial-gradient(circle, rgba(51,23,64,0.5662640056022409) 0%, rgba(21,11,27,0.7203256302521008) 100%), url(${BackgroundIMG})`,
        backgroundRepeat: "no-repeat",
        //backgroundPosition: "fixed",
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
                        STELAR
                    </Typography>
                    <Typography variant="h5" align="center" color="textPrimary" className={classes.textColor} paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc.
                        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                        entirely.
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    <i className="fas fa-meteor mr-1"></i> Descubrir
                                </Button>
                            </Grid>
                            <Grid item>
                                {
                                    user ? (
                                        <Link
                                            to="/s"
                                            variant="contained"
                                            color="primary"
                                            role="button"
                                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                                        >
                                            <i className="fa fa-fw fa-rocket mr-1"></i> Ir al panel
                                        </Link>
                                    ) : (
                                        <Link
                                            to="/login"
                                            variant="contained"
                                            color="primary"
                                            role="button"
                                            className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"
                                        >
                                            <i className="fa fa-fw fa-rocket mr-1"></i> Iniciar Sesión
                                        </Link>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </div>

                </div>
            </div>
        </div>
    )
}

/*
export const Home = () => {
    const { user } = useContext(AuthContext)
    const jumbotronStyle = {
        backgroundImage: `radial-gradient(circle, rgba(51,23,64,0.5662640056022409) 0%, rgba(21,11,27,0.7203256302521008) 100%), url(${Background})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
    const textResponsive = {
        fontSize: '12vw'
    }
    return(
        <main role="main">
            <div style={ jumbotronStyle } className="jumbotron rounded-0 text-center">
                <br/><br/>
                <div className="container">
                    <h1 className="display-3 text-light home-text" style={textResponsive}>¡Bienvenid@!</h1>
                    <p className="text-light home-text">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    <p>
                        <Link to="/dashboard" className="btn btn-primary" role="button">
                            <i className="fas fa-meteor mr-1"></i> Descubrir
                        </Link>
                        &nbsp;
                        <Link to="/login" className="btn btn-primary" role="button">
                            <i className="fa fa-fw fa-rocket mr-1"></i> Ingresar
                        </Link>
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><Link to="/" className="btn btn-secondary" role="button">View details &raquo;</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><Link to="/" className="btn btn-secondary" role="button">View details &raquo;</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><Link to="/" className="btn btn-secondary" role="button">View details &raquo;</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                Gg { user ? user.access_id : "Hi" }
                                { user ? user.username : "Hi" }
                                { user ? user.createdAt : "Hi" }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
*/