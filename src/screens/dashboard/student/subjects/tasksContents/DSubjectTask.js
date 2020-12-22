import React, { useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles'
import { TabContext, TabList, TabPanel } from '@material-ui/lab'
import { AttachFile, Description, CloudUpload, Visibility, Close, Pageview } from '@material-ui/icons'
import {
    Tab, Avatar, TextField, Paper, Grid, Button, Card, CardContent, Toolbar,
    List, ListItem, ListItemIcon, ListItemText, Typography, Divider, IconButton,
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox
} from '@material-ui/core'
import {
    GETSTUDENTTASKS, GETSTUDENTTASK, GETTASK, UPLOAD_FILES_TASK, DELIVERTASK, CANCELTASKDELIVERY, SET_CONTENT_TASK,
    dateFormat, GetUserNames
} from '../../../../../utils'
import { AuthContext } from '../../../../../context/auth'
import { Loader1, SubjectTabs, Wrapper } from '../../../../../components/dashboard'

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
    },
    commentsList: {
        width: '100%',
        maxWidth: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    archives: {
        textAlign: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(12),
          height: theme.spacing(12),
        },
    },
    archivesColor: {
        width: '200px',
        backgroundColor: "#DBDBDB"
    },
    archivesTitleColor: {
        borderTopRightRadius: '4px',
        borderTopLeftRadius: '4px',
        overflow: 'hidden',
        backgroundColor: "#9B9B9B"
    },
    inputStyle: {
        minWidth: '400px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: '385px'
    },
    formClass: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

let archives = []

function DSubjectTask(props){
    const subjectID = props.match.params.id
    const taskID = props.match.params.taskID
    const classes = useStyles()
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm()
    const { loading, error, data } = useQuery(GETTASK, { variables: { taskID } })
    const [uploadFilesTask] = useMutation(UPLOAD_FILES_TASK)
    const [setContentTask] = useMutation(SET_CONTENT_TASK)
    const [deliverTask] = useMutation(DELIVERTASK)
    const [cancelTaskDelivery] = useMutation(CANCELTASKDELIVERY)
    const { loading: lTask, error: eTask, data: dTask } = useQuery(GETSTUDENTTASKS, { variables: { userID: user.id } })
    const [dataTask2, { data: dataTask1, loading: loadingDataTask1 }] = useLazyQuery(GETSTUDENTTASK)

    const [changes, setChanges] = useState(false)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [value, setValue] = useState("0")
    const [fileName, setFileName] = useState('')
    const [fileFrom, setFileFrom] = useState('')
    const [taskDeliveredStatus, setTaskDeliveredStatus] = useState(false)
    const [checkName, setCheckName] = useState('')
    const [checkID, setCheckID] = useState('')

    const handleChange = (event, newValue) => { setValue(newValue) }
    const handleClickOpen = () => { setOpen(true) }
    const handleClickOpen2 = () => { setOpen2(true) }
    const handleClickOpen4 = () => { setOpen4(true) }
    const handleClickOpen5 = () => { setOpen2(false); setOpen5(true) }
    const handleClose = () => { setOpen(false) }
    const handleClose2 = () => { setOpen2(false) }
    const handleClose3 = () => { setOpen3(false) }
    const handleClose4 = () => { setOpen4(false) }
    const handleClose5 = () => { setOpen5(false); setOpen2(true) }
    const clickChangeTask = (title, id) => { setCheckName(title); setCheckID(id) }

    if(loading) return <Loader1/>
    if(error) return <div>Error al cargar las tareas...</div>

    if(lTask) return <Loader1/>
    if(eTask) return <div>Error al cargar las tareas del alumno...</div>

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.file[0])
        formData.append("userID", user.id)
        formData.append("subjectID", subjectID)
        formData.append("taskID", task.id)
        formData.append("type", "student")
        
        const res = await fetch(process.env.REACT_APP_VIDEO+'file', {
            method: "POST",
            body: formData
        }).then(res => {
            uploadFilesTask({ variables: { taskID, type: 'student', fileName: data.file[0].name } })
            archives.push({
                "fileName": data.file[0].name,
                "userID": user.id,
                "subjectID": subjectID,
                "taskID": task.id,
                "from": "pc",
                "sTaskID": null
            })
            return res.json()
        })

        if(res.message === 'success'){ alert('Archivo subido con éxito') }

        setChanges(true)
        handleClose2()
    }

    const submitTask = () => {
        deliverTask({ variables: { taskID }})
        setTaskDeliveredStatus(true)
        alert('Tarea entregada')
        handleClose()
    }

    const cancelSubmitTask = () => {
        cancelTaskDelivery({ variables: { taskID }})
        setTaskDeliveredStatus(false)
        alert('Entrega cancelada')
        handleClose4()
    }

    const setStudentTaskToList = () => {
        setContentTask({ variables: { taskID, fileName: checkName, sTaskID: checkID } })
        archives.push({
            "fileName": checkName,
            "userID": user.id,
            "subjectID": subjectID,
            "taskID": task.id,
            "from": "system",
            "sTaskID": checkID
        })
        handleClose5()
        handleClose2()
        alert('Tarea agregada')
    }

    const task = data.getTask
    const studentTasks = dTask.getStudentTasks
    const newDate = dateFormat(task.createdAt)

    const foundStaticFiles = archives.find(archive => archive.taskID === taskID)
    const foundFilesTrue = task.archives.find(archive => archive.status === true)
    const studentArchives = task.studentArchives.filter((archive) => { return archive.studentID === user.id })
    const foundFilesFalse = studentArchives.find(archive => archive.status === false)
    const studentArchivesDelivered = studentArchives.filter((archive) => { return archive.status === true })

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
                                {
                                    !foundFilesTrue ? (
                                        <Typography variant="body2" gutterBottom>
                                            No hay archivos adjuntos...
                                        </Typography>
                                    ) : (
                                        <div className={classes.archives}>
                                        {
                                            task.archives.map((archive) => {
                                                return archive.status === true ? (
                                                    <Paper className={classes.archivesColor}>
                                                        <div className={classes.archivesTitleColor}>
                                                            {archive.name}
                                                        </div>
                                                        <Divider/>
                                                        <IconButton
                                                            color="primary"
                                                            component="span"
                                                            onClick={() => {
                                                                setOpen3(true)
                                                                setFileName(archive.name)
                                                                setFileFrom('pc')
                                                            }}
                                                        >
                                                            <Visibility/>
                                                        </IconButton>
                                                    </Paper>
                                                ) : ( <></> )
                                            })
                                        }
                                        </div>
                                    )
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <List id="myContentXD" component="nav" aria-label="main mailbox folders">
                                {
                                    foundStaticFiles ? archives.map(archive => {
                                        return(
                                            <ListItem button onClick={() => {
                                                setOpen3(true)
                                                setFileName(archive.fileName)
                                                if(archive.from === 'system'){
                                                    setFileFrom(archive.from)
                                                    dataTask2({ variables: { studentTaskID: archive.sTaskID } })
                                                } else {
                                                    setFileFrom('pc')
                                                }
                                            }}>
                                                <ListItemIcon>
                                                    <Description/>
                                                </ListItemIcon>
                                                <ListItemText primary={archive.fileName} />
                                            </ListItem>
                                        )
                                    }) : ( <></> )
                                }{
                                    studentArchives.map((archive) => {
                                        return(
                                            <ListItem button onClick={() => {
                                                setOpen3(true)
                                                setFileName(archive.name)
                                                if(archive.from === 'system'){
                                                    setFileFrom(archive.from)
                                                    dataTask2({ variables: { studentTaskID: archive.sTaskID } })
                                                } else {
                                                    setFileFrom('pc')
                                                }
                                            }}>
                                                <ListItemIcon>
                                                    <Description/>
                                                </ListItemIcon>
                                                <ListItemText primary={archive.name} />
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                            <div id="myButtonXD">
                                {
                                    taskDeliveredStatus || studentArchivesDelivered.length > 0 ? (
                                        <Button
                                            variant="contained"
                                            color="red"
                                            className={classes.button}
                                            onClick={handleClickOpen4}
                                        >
                                            Cancelar entrega
                                        </Button>
                                    ) : (
                                        <>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.button}
                                            startIcon={<AttachFile/>}
                                            onClick={handleClickOpen2}
                                            id="butt1"
                                        >
                                            Adjuntar tarea
                                        </Button>

                                        <br id="br1"/>
                                        <br id="br2"/>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className={classes.button}
                                            onClick={handleClickOpen}
                                            disabled={changes || foundFilesFalse ? false : true}
                                            id="butt2"
                                        >
                                            Entregar tarea
                                        </Button>
                                        </>
                                    )
                                }
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Paper>
                            <TabContext value={value}>
                                <TabList onChange={handleChange}>
                                    <Tab label="Públicos" value="0"/>
                                    <Tab label="Privados" value="1"/>
                                </TabList>
                                <TabPanel value="0">
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <Avatar>DF</Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="button" display="block" gutterBottom>
                                                Ditter Federico
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Comentario de prueba
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <br/>
                                    <Divider/>
                                    <br/>
                                    <form noValidate autoComplete="off">
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <Avatar>R</Avatar>
                                            </Grid>
                                            <Grid item xs>
                                                <TextField
                                                    fullWidth
                                                    id="outlined-multiline-flexible"
                                                    label="Realiza un comentario público..."
                                                    multiline
                                                    rowsMax={4}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Button>Comentar</Button>
                                        </Grid>
                                    </form>

                                </TabPanel>
                                <TabPanel value="1">
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item>
                                            <Avatar>DF</Avatar>
                                        </Grid>
                                        <Grid item xs>
                                            <Typography variant="button" display="block" gutterBottom>
                                                Ditter Federico
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Comentario de prueba en privado
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <br/>
                                    <Divider/>
                                    <br/>
                                    <form noValidate autoComplete="off">
                                        <Grid container wrap="nowrap" spacing={2}>
                                            <Grid item>
                                                <Avatar>R</Avatar>
                                            </Grid>
                                            <Grid item xs>
                                                <TextField
                                                    fullWidth
                                                    id="outlined-multiline-flexible"
                                                    label="Realiza un comentario privado..."
                                                    multiline
                                                    rowsMax={4}
                                                    variant="outlined"
                                                />
                                            </Grid>
                                            <Button>Comentar</Button>
                                        </Grid>
                                    </form>
                                </TabPanel>
                            </TabContext>
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
                <Button onClick={submitTask} color="primary" autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>

        <Dialog
            open={open2}
            onClose={handleClose2}
            aria-labelledby="alert-dialog-title2"
            aria-describedby="alert-dialog-description2"
        >
            <DialogTitle id="alert-dialog-title2">
                Adjuntar archivo
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description2">
                    <form>
                        <Button
                            variant="contained"
                            component="label"
                            className={classes.button}
                            startIcon={<CloudUpload/>}
                        >
                            Subir archivo...
                            <input ref={register} type="file" name="file" hidden onChange={handleSubmit(onSubmit)}/>
                        </Button>
                    </form>
                </DialogContentText>
                <center>Ó</center>
                <DialogContentText id="alert-dialog-description2">
                    <Button
                        variant="contained"
                        component="label"
                        className={classes.button}
                        startIcon={<Pageview/>}
                        onClick={handleClickOpen5}
                    >
                        Seleccionar tarea
                    </Button>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose2} color="primary">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>

        <Dialog
            fullScreen
            open={open3}
            onClose={handleClose3}
            aria-labelledby="alert-dialog-title3"
            aria-describedby="alert-dialog-description3"
        >
                <Toolbar style={{ backgroundColor: "#4040a1", color: 'white' }}>
                    <IconButton edge="start" color="inherit" onClick={handleClose3} aria-label="close">
                        <Close />
                    </IconButton>
                    <Typography>
                        Cerrar
                    </Typography>
                </Toolbar>
                {
                    /*fileFrom === 'pc' ? (

                    ) : (
                        
                    )*/

                    fileFrom === 'pc' && fileName.includes('.pdf') ? (
                        <embed
                            src={process.env.REACT_APP_VIDEO+'uploads/'+subjectID+'/'+taskID+'/teacher/'+fileName}
                            type="application/pdf"
                            height="100%"
                        />
                    ) : fileFrom === 'system' ? (
                        <Card>
                            <CardContent>
                                <Typography>
                                    {
                                        loadingDataTask1 ? (
                                            <div>Cargando...</div>
                                        ) : dataTask1 ? (
                                            <div>
                                                <h2>{dataTask1.getStudentTask.title}</h2>
                                                <br/>
                                                {dataTask1.getStudentTask.body}
                                            </div>
                                        ) : (
                                            <div>Error</div>
                                        )
                                    }
                                </Typography>
                            </CardContent>

                        </Card>
                    ) : (
                        <div>Error</div>
                    )
                }
        </Dialog>

        <Dialog
            open={open4}
            onClose={handleClose4}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                ¿Seguro que desea cancelar la entrega?
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose4} color="primary">
                    Cancelar
                </Button>
                <Button onClick={cancelSubmitTask} color="primary" autoFocus>
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>

        <Dialog
            open={open5}
            onClose={handleClose5}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Seleccione una tarea de su lista...
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description5">

                    {
                        studentTasks.length > 0 ? (
                            <div className={classes.formClass}>
                                <FormGroup>
                                    {
                                        studentTasks.map((i) => {
                                            return (
                                                <FormControlLabel
                                                    value={i.id}
                                                    control={<Checkbox color="primary" />}
                                                    label={i.title}
                                                    labelPlacement={i.title}
                                                    onClick={() => { clickChangeTask(i.title, i.id) }}
                                                />
                                            )
                                        })
                                    }
                                </FormGroup>
                            </div>
                        ) : (<div>No se encontró ninguna tarea...</div>)
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose5} color="primary">
                    Cancelar
                </Button>
                <Button
                    onClick={() => { setStudentTaskToList() }}
                    color="primary"
                    disabled={ checkName !== '' ? false : true }
                    autoFocus
                >
                    Aceptar
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default DSubjectTask