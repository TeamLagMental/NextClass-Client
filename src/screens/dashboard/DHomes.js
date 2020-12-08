import React from 'react'
import { Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Wrapper, PostCard2} from './../../components/dashboard'
import Button from '@material-ui/core/Button'
import { blue } from '@material-ui/core/colors'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';


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
      }
  }));


export const DH = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');
    console.log(value)
    const handleChange = (event) => {
    setValue(event.target.value)
    }
    return (
    <Wrapper>
        <Grid  item xs={12}>
                <Grid  item xs={12}>
                    <PostCard2 spacing={3}
                        title="Instituto Politecnico Formosa- IPF"
                        subtitle="asadsad"
                        image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                        imageHeight={270}
                        Comment={
                            <Grid
                            container
                            direction="row"
                            justify="flex-end"
                            alignItems="flex-start">
                                <Button >Cambiar imagen</Button>
                            </Grid>
                        }
                    />
                </Grid>
                <div className={classes.root}>
                <Wrapper>
                  <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <Typography variant="button" display="block" gutterBottom>Proxima Clase</Typography>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs>
                                    Matematicas- Ahora
                                </Grid>
                            </Grid>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item xs>
                                    Lengua- Mañana
                                </Grid>
                            </Grid>
                            <Wrapper>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Typography variant="button" display="block" gutterBottom>Profesores</Typography>
                            </Grid>
                            </Wrapper>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>SR</Avatar>
                                </Grid>
                                <Grid item xs>
                                    Silva Roberto
                                </Grid>
                            </Grid>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>RL</Avatar>
                                </Grid>
                                <Grid item xs>
                                    Rolon Lautaro
                                </Grid>
                            </Grid>
                            <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>DF</Avatar>
                                </Grid>
                                <Grid item xs>
                                    Ditter Federico
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                  
                    <Grid item xs={10} >

                    <PostCard2 spacing={12}
                        title="Bienvenidos al IPF"
                        subtitle="Rolon Lautaro"
                        text="EL Instituto le da la Bienvenida a la nueva Vida del Estudiante Terciario"
                        avatar={
                            <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                                RL
                            </Avatar>
                        }
                        Comment={
                            <Wrapper >
                                <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                     <Avatar>R</Avatar>
                                 </Grid>
                                  <Grid item xs>
                                <Typography variant="button" display="block" gutterBottom>Roberto Silva</Typography>
                                <Typography variant="body2" gutterBottom>
                                    La puta vieja de que te re mil pario ahrre
                                </Typography>
                                </Grid>
                                </Grid>
                            </Wrapper>
                        }
                        buttons={
                            <Wrapper variant="outlined">
                                <form className={classes.root} noValidate autoComplete="off">
                                <Grid container wrap="nowrap" spacing={2}>
                                <Grid item>
                                    <Avatar>R</Avatar>
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
                            </Wrapper>
                        }
                    />
                    </Grid>
                  </Grid>
                  </Wrapper>
                </div>
        </Grid>
    </Wrapper>
    )
}