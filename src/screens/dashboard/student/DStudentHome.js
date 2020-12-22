import React, { useState } from 'react'
import { Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import { blue } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'

import { Wrapper, PostCard2 } from './../../../components/dashboard'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& .MuiTextField-root': {
            margin: theme.spacing(1)
        },
    },
    paper: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    textField: {
        width: '25ch',
    },
    postInput: {
        border: 0,
        width: "95%",
        [theme.breakpoints.up("sm")]: {
            padding: theme.spacing(1) * 3
        },
        [theme.breakpoints.down("xs")]: {
            padding: theme.spacing(1) * 2
        },
        fontSize: "15px",
        outline: 0,
        backgroundColor: theme.palette.background.paper
    }
}));

export const DStudentHome = () => {
    const classes = useStyles()
    const [value, setValue] = useState('Controlled')
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <Wrapper>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <CardMedia
                            image={`https://agenfor.com.ar/wp-content/uploads/2020/02/ciencia2.jpg`}
                            className={classes.media}
                            style={{ paddingTop: 270 }}
                        />
                        <CardContent>
                            <Typography variant="h5">
                                Instituto Politécnico Formosa
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={3}>
                            <Grid item  xs={6} sm={12}> 
                                Próxima clase: 
                                <Typography variant="caption" display="block" gutterBottom>
                                    Matemática - Ahora
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Matemática - Mañana
                                </Typography>
                            </Grid>
                            <Grid item  xs={6} sm={12}> 
                                Tareas pendientes:
                                <Typography variant="caption" display="block" gutterBottom>
                                    Matemática - Tarea derivadas
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    Matemática - Tarea integrales
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                            
                <Grid item xs={12} sm={9}>

                    <PostCard2 spacing={12}
                        title="Roberto Silva"
                        subtitle="08-11-2020"
                        text="EL instituto le da la bienvenida a todos los ingresantes"
                        avatar={
                            <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                                RL
                            </Avatar>
                        }
                        Comment={
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>DF</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant="button" display="block" gutterBottom>Ditter Federico</Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Buenos días profesor! Espero aprender mucho...
                                    </Typography>
                                </Grid>
                            </Grid>
                        }
                        buttons={
                            <form className={classes.root} noValidate autoComplete="off">
                                <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>DF</Avatar>
                                </Grid>
                                <Grid item xs>
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-flexible"
                                    label="Escribe un comentario..."
                                    multiline
                                    rowsMax={4}
                                    onChange={handleChange}
                                    variant="outlined"
                                />
                                </Grid>
                                <Button to="">Comentar</Button>
                                </Grid>
                            </form>
                        }
                    />
                </Grid>
            </Grid>
        </Wrapper>
    )
}