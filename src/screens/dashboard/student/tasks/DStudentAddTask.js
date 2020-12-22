import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks'
import Card from '@material-ui/core/Card';
import ReactQuill from 'react-quill';
import Button from '@material-ui/core/Button';
import { Wrapper } from './../../../../components/dashboard'

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { CREATESTUDENTTASK } from './../../../../utils'

import 'react-quill/dist/quill.snow.css';
import './editor.css';

export const DStudentAddTask = () => {
    const [addStudentTask] = useMutation(CREATESTUDENTTASK)

    const [redirect, setRedirect] = useState('')
    const [bodyContent, setBodyContent] = useState('')
    const [titleContent, setTitleContent] = useState('')
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => { setOpen(true) }
    const handleClose = () => { setOpen(false) }
    const handleChange = (event) => { setTitleContent(event.target.value) }

    const saveTaskContent = () => {
        addStudentTask({ variables: { body: bodyContent, title: titleContent } })
        handleClose()
        setRedirect(<Redirect to="/d/student/my-tasks"/>)
    }

    return (
        <Wrapper>
            <Card className="overflow-visible">
                <ReactQuill onChange={setBodyContent} placeholder={'Escribe algo...'} />
            </Card>
            <br></br>
            <Button
                variant="outlined"
                color="primary"
                onClick={(e) => {
                    e.preventDefault()
                    handleClickOpen()
                }}
            >
                Guardar
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Asignar título</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Título de la tarea"
                        type="text"
                        onChange={handleChange}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={() => { return saveTaskContent() }} color="primary">
                        Guardar
                    </Button>
                </DialogActions>
            </Dialog>

            {redirect}
        </Wrapper>
    )
}