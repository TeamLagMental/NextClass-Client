import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import { Grid, Avatar, Typography, TextField } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';

import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import DescriptionIcon from '@material-ui/icons/Description';

import { GETTASK, EDITTASK, UPLOAD_FILES_TASK, PUBLICUPLOADFILESTASK, dateFormat, GetUserNames } from '../../../../../utils'
import { Loader1, SubjectTeacherTabs, Wrapper } from '../../../../../components/dashboard'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    root2: {
        flexGrow: 1,
        borderRadius: "0px",
        backgroundColor: "#4040a1"
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
    }
}))

let archives = []

export function DTSubjectTask(props){
    const subjectID = props.match.params.id
    const taskID = props.match.params.taskID
    const classes = useStyles()
    const { register, handleSubmit } = useForm()
    const { loading, error, data } = useQuery(GETTASK, { variables: { taskID } })
    const [statusFile] = useMutation(PUBLICUPLOADFILESTASK)
    const [editTask] = useMutation(EDITTASK)

    //UPLOAD_FILES_TASK
    const [uploadFilesTask] = useMutation(UPLOAD_FILES_TASK)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskBody, setTaskBody] = useState('')
    const [taskDeliveryDate, setTaskDeliveryDate] = useState('')

    const [changes, setChanges] = useState(false)
    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)

    const [fileName, setFileName] = useState('')

    const [value, setValue] = useState("0")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClickOpen2 = () => {
        setOpen2(true)
    }
    const handleClickOpen4 = () => {
        setOpen4(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClose2 = () => {
        setOpen2(false)
    }
    const handleClose3 = () => {
        setOpen3(false)
    }
    const handleClose4 = () => {
        setOpen4(false)
    }

    if(loading) return <Loader1/>
    if(error) return <div>Error al cargar las tareas...</div>

    const task = data.getTask
    const newDate = dateFormat(task.createdAt)

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("file", data.file[0])
        formData.append("userID", '1')
        formData.append("subjectID", subjectID)
        formData.append("taskID", task.id)
        formData.append("type", "teacher")
        
        const res = await fetch(process.env.REACT_APP_VIDEO+'file', {
            method: "POST",
            body: formData
        }).then(res => {
            uploadFilesTask({ variables: { taskID, type: 'teacher', fileName: data.file[0].name } })
            archives.push({
                "fileName": data.file[0].name,
                "userID": data.userID,
                "subjectID": subjectID,
                "taskID": task.id
            })
            return res.json()
        })

        if(res.message === 'success'){
            alert('Archivo subido con éxito')
        }

        setChanges(true)
        handleClose2()
    }

    const foundStaticFiles = archives.find(archive => archive.taskID === taskID)
    const foundFilesTrue = task.archives.find(archive => archive.status === true)
    const foundFilesFalse = task.archives.find(archive => archive.status === false)

    const changeFileStatus = () => {
        const filterFilesFalse = task.archives.filter(archive => archive.status === false)
        
        if(filterFilesFalse){
            filterFilesFalse.forEach((archive) => {
                statusFile({ variables: { taskID, fileID: archive.id }})
            })
            handleClose()
            alert('Guardado')
        } else {
            alert('ERROR')
        }
    }
    
    return (
        <>
        <SubjectTeacherTabs subjectID={subjectID}/>
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
                                                            }}
                                                        >
                                                            <VisibilityIcon />
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
                            <List component="nav" aria-label="main mailbox folders">
                                {
                                    foundStaticFiles ? archives.map(archive => {
                                        return (
                                            <ListItem button onClick={() => {
                                                setOpen3(true)
                                                setFileName(archive.fileName)
                                            }}>
                                                <ListItemIcon>
                                                    <DescriptionIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={archive.fileName} />
                                            </ListItem>
                                        )
                                    }) : ( <></> )
                                }{
                                    task.archives.map((archive) => {
                                        return archive.status === false ? (
                                            <ListItem button onClick={() => {
                                                setOpen3(true)
                                                setFileName(archive.name)
                                            }}>
                                                <ListItemIcon>
                                                    <DescriptionIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={archive.name} />
                                            </ListItem>
                                        ) : ( <></>)
                                    })
                                }
                            </List>

                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<AttachFileIcon />}
                                onClick={handleClickOpen2}
                            >
                                Adjuntar archivo
                            </Button>

                            <br></br>
                            <br></br>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleClickOpen}
                                disabled={changes || foundFilesFalse ? false : true}
                            >
                                Publicar archivos
                            </Button>
                            <br></br>
                            <br></br>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={handleClickOpen4}
                            >
                                Editar
                            </Button>
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
                ¿Está seguro que desea guardar los cambios?
            </DialogTitle>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
                <Button onClick={changeFileStatus} color="primary" autoFocus>
                    Guardar
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
                Agregar archivo
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description2">
                    <form>
                        <Button
                            variant="contained"
                            component="label"
                            className={classes.button}
                            startIcon={<CloudUploadIcon />}
                        >
                            Seleccionar archivo...
                            <input ref={register} type="file" name="file" hidden onChange={handleSubmit(onSubmit)}/>
                        </Button>
                    </form>
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
                        <CloseIcon />
                    </IconButton>
                    <Typography>
                        Cerrar
                    </Typography>
                </Toolbar>
                {
                    fileName.includes('.pdf') ? (
                        <embed
                            src={process.env.REACT_APP_VIDEO+'uploads/'+subjectID+'/'+taskID+'/teacher/'+fileName}
                            type="application/pdf"
                            height="100%"
                        />
                    ) : (
                        <div>Error</div>
                    )
                }
        </Dialog>

        { /* EDIT */ }
        <Dialog
            open={open4}
            onClose={handleClose4}
            aria-labelledby="alert-dialog-title4"
            aria-describedby="alert-dialog-description4"
        >
            <DialogTitle id="alert-dialog-title4">
                Editar tarea
            </DialogTitle>
            <form>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description4">
                            <TextField
                                className={classes.inputStyle}
                                id="tasktEDTitle"
                                label="Título"
                                defaultValue={task.title}
                                placeholder="Placeholder"
                                multiline
                                variant="outlined"
                                onChange={e => setTaskTitle(e.target.value)}
                            />
                            <br/><br/>
                            <TextField
                                className={classes.inputStyle}
                                id="tasktEDDescription"
                                label="Descripción"
                                defaultValue={task.body}
                                placeholder="Placeholder"
                                multiline
                                variant="outlined"
                                onChange={e => setTaskBody(e.target.value)}
                            />
                            <br/><br/>
                            <TextField
                                id="tasktEDDate"
                                label="Fecha de entrega"
                                type="datetime-local"
                                defaultValue={task.deliveryDate.slice(0, -8)}
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onChange={e => setTaskDeliveryDate(e.target.value)}
                            />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose4} color="primary">
                        Cancelar
                    </Button>
                    <Button color="primary"
                        onClick={e => {
                            e.preventDefault()
                            handleClose4()
                        }}
                    >
                        Guardar cambios
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
        </>
    )
}