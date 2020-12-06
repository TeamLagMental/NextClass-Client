import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { GETTASK, dateFormat, GetUserNames } from '../../../../../utils'
import { Loader1, SubjectTabs, Wrapper } from '../../../../../components/dashboard'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    button: {
        width: '100%'
    }
}));

function DSubjectTask(props){
    const subjectID = props.match.params.id
    const taskID = props.match.params.taskID
    const classes = useStyles();
    const { loading, error, data } = useQuery(GETTASK, { variables: { taskID } })

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if(loading) return <Loader1/>
    if(error) return <div>Error al cargar las tareas...</div>

    const task = data.getTask
    const newDate = dateFormat(task.createdAt)

    return (
        <>
        <SubjectTabs subjectID={subjectID}/>
        <Wrapper>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={8}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {task.title}
                                </Typography>
                                <Typography color="textSecondary" gutterBottom>
                                    <GetUserNames userID={task.teacherID}/> • {newDate}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {task.body}
                                </Typography>
                                <br/>
                                <Divider light />
                                <br/>
                                <Typography component="p">
                                    ASDASDSADSA
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                            >
                                Subir archivo
                            </Button>
                            <br></br>
                            <br></br>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleClickOpen}
                            >
                                Entregar tarea
                            </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper className={classes.paper}>
                            xs=12 sm=6
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Wrapper>

        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                ¿Seguro que desea realizar la entrega?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Una vez realizada la entrega puedes cancelarla y volver a realizarla en un futuro.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default DSubjectTask