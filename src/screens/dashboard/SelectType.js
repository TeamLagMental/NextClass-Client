import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import classNames from 'classnames'
import { Person } from '@material-ui/icons'
import { Card, CardContent, Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'
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
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    }
}))

export const SelectType = () => {
    const { user } = useContext(AuthContext)
    const classes = useStyles()

    if(user){
        const userRank = user.ranks

        return userRank.length > 1 ? (
            <div className={classNames(classes.session, classes.background)}>
                <div className={classes.content}>
                    <div className={classes.wrapper}>
                        <Card>
                            <CardContent>
                                <div className="text-xs-center pb-xs">
                                    <Typography variant="caption">
                                        Seleccione un tipo de cuenta...
                                    </Typography>
                                </div>
                                <List>
                                    {userRank.map((rank) => (
                                        <div key={rank}>
                                            {rank === 3 ? (
                                                <Link to='/d/admin'>
                                                    <ListItem button>
                                                        <ListItemAvatar>
                                                            <Avatar className={classes.avatar} src="https://i.redd.it/vl3e90ahihf51.jpg"/>
                                                        </ListItemAvatar>
                                                        <ListItemText>Administrador</ListItemText>
                                                    </ListItem>
                                                </Link>
                                            ) : rank === 2 ? (
                                                <Link to='/d/teacher'>
                                                    <ListItem button>
                                                        <ListItemAvatar>
                                                            <Avatar className={classes.avatar}>
                                                                <Person/>
                                                            </Avatar>
                                                        </ListItemAvatar>
                                                        <ListItemText>Profesor</ListItemText>
                                                    </ListItem>
                                                </Link>
                                            ) : (
                                                <Link to='/d/student'>
                                                    <ListItem button>
                                                        <ListItemAvatar>
                                                            <Avatar className={classes.avatar} src="https://previews.123rf.com/images/creativenature/creativenature1503/creativenature150300034/37192006-un-retrato-resoluci%C3%B3n-completa-de-la-cabeza-de-un-var%C3%B3n-zorro-rojo-vulpes-vulpes-en-entorno-natural-con-fo.jpg"/>
                                                        </ListItemAvatar>
                                                        <ListItemText>Alumno</ListItemText>
                                                    </ListItem>
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </List>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        ) : userRank.includes(1) ? (
            <Redirect to="/d/student"/>
        ) : userRank.includes(2) ? (
            <Redirect to="/d/teacher"/>
        ) : userRank.includes(3) ? (
            <Redirect to="/d/admin"/>
        ) : (
            <div>ALERTA</div>
        )
    } else {
        return (<Redirect to="/login"/>)
    }
}