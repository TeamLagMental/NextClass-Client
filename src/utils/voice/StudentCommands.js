import React, { useContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { Redirect } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles'
import { ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core'
import { Description } from '@material-ui/icons'
import {
    GETSUBJECTSUSER, GETSUBJECTTASKS, GETTASK, CREATESTUDENTTASK,
    GETSTUDENTTASKS, SET_CONTENT_TASK, DELIVERTASK, CANCELTASKDELIVERY,
    GETPDFCONTENT, GETWORDCONTENT
} from './../'
import { AuthContext } from '../../context/auth'
import { numberToInt, textToVoice } from './voiceFunctions/voiceFunctions'

const studentCommandsDirectories = [
    {
        name: 'inicio',
        uri: '/d/student'
    },{
        name: 'carreras',
        other: 'carrera',
        uri: '/d/student/careers'
    },{
        name: 'materias',
        other: 'materia',
        uri: '/d/student/subjects'
    }
]

const symbolsList = [
    { name: 'punto', symbol: '.' },
    { name: 'puntos suspensivos', symbol: '...' },
    { name: 'coma', symbol: ',' },
    { name: 'punto y coma', symbol: ';' },
    { name: 'abrir comillas', symbol: '"' },
    { name: 'cerrar comillas', symbol: '"' },
    { name: 'espacio', symbol: ' ' },
    { name: 'barra', symbol: '/' },
    { name: 'abrir paréntesis', symbol: '(' },
    { name: 'cerrar paréntesis', symbol: ')' },
    { name: 'abrir corchete', symbol: '[' },
    { name: 'cerrar corchete', symbol: ']' },
]

const redirectTo = (uri) => <Redirect to={ uri }/>

const useStyles = makeStyles((theme) => ({
    button: {
        width: '100%'
    }
}))

export const StudentCommands = (state) => {
    const synth = window.speechSynthesis
    const { speak } = useSpeechSynthesis()
    const { user } = useContext(AuthContext)
    const classes = useStyles()

    const [IDSubject, setIDSubject] = useState('')
    const [IDTask, setIDTask] = useState('')
    const [newTask, setNewTask] = useState(false)
    const [cancelTask, setCancelTask] = useState(false)
    const [attachTask, setAttachTask] = useState(false)
    const [taskLastContent, setTaskLastContent] = useState('')
    const [titleContent, setTitleContent] = useState('')
    const [selectMyTask, setSelectMyTask] = useState('')
    const [taskDelivered, setTaskDelivered] = useState(false)
    const [taskArchive, setTaskArchive] = useState('')

    const { data: dataSubjectUser1 } = useQuery(GETSUBJECTSUSER, { variables: { userId: user.id } })
    const [dataTask2, { data: dataTask1, loading: loadingDataTask1 }] = useLazyQuery(GETTASK)
    const [dataSubjectTasks2, {
        data: dataSubjectTasks1, loading: loadingSubjectTasks1
    }] = useLazyQuery(GETSUBJECTTASKS)
    const [addStudentTask] = useMutation(CREATESTUDENTTASK)
    const { loading: lSTask, data: dSTask } = useQuery(GETSTUDENTTASKS, { variables: { userID: user.id } })
    const [setContentTask] = useMutation(SET_CONTENT_TASK)
    const [deliverTask] = useMutation(DELIVERTASK)
    const [cancelTaskDelivery] = useMutation(CANCELTASKDELIVERY)
    const [dataPDF, { loading: lPDF, data: dPDF }] = useLazyQuery(GETPDFCONTENT)
    const [dataWORD, { loading: lWORD, data: dWORD }] = useLazyQuery(GETWORDCONTENT)

    const ItemRender = (name) => {
        return (
            <ListItem button>
                <ListItemIcon>
                    <Description/>
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItem>
        )
    }
    
    const Item2Render = () => {
        const myButton1 = document.getElementById('butt1')
        myButton1.setAttribute("style", "display:none;")

        const br1 = document.getElementById('br1')
        br1.setAttribute("style", "display:none;")
        const br2 = document.getElementById('br2')
        br2.setAttribute("style", "display:none;")

        const myButton2 = document.getElementById('butt2')
        myButton2.classList.remove("MuiButton-containedPrimary")
        return myButton2.textContent = "Cancelar entrega"
    }

    const Item3Render = () => {
        const myButton1 = document.getElementById('butt1')
        myButton1.removeAttribute("style")

        const br1 = document.getElementById('br1')
        br1.removeAttribute("style")
        const br2 = document.getElementById('br2')
        br2.removeAttribute("style")

        const myButton2 = document.getElementById('butt2')
        myButton2.setAttribute("class", "MuiButtonBase-root MuiButton-root MuiButton-contained makeStyles-button-118 MuiButton-containedPrimary")
        return myButton2.textContent = "Entregar tarea"
    }

    /* ------------------------------------------------------------- */

    return [{
        // Terminado
        command: 'Detener',
        callback: () => synth.cancel()
    },{
        // Terminado
        command: 'Quiero ir a *',
        callback: (directory) => {
            const found = studentCommandsDirectories.find(
                element => element.name === directory || element.other === directory
            )
            if(found){
                speak({ text: 'Yendo a '+directory })
                return state(redirectTo(found.uri))
            } else {
                //speak({ text: 'No se encontró el directorio '+directory })
                const newText = 'No se encontró el directorio '+directory
                textToVoice(newText, speak)
            }
        }
    },{
        // Terminado
        command: 'Listar asignaturas',
        callback: () => {
            if(!dataSubjectUser1) return speak({ text: 'No se encuentra registrado en ninguna asignatura' })
            return dataSubjectUser1.getSubjectsUser.map((subject, key) => {
                return speak({ text: 'asignatura '+(key+1)+': '+subject.name })
            })
        }
    },{
        // Terminado
        command: 'Seleccionar asignatura *',
        callback: (subject) => {
            if(!dataSubjectUser1) return speak({ text: 'No se encuentra registrado en ninguna asignatura' })
            const res = dataSubjectUser1.getSubjectsUser.find(s => {
                const r = s.name.toLowerCase() === subject
                return r
            })
            if(res){
                speak({ text: 'Asignatura '+subject+' seleccionada.'})
                setIDSubject(res.id)
                dataSubjectTasks2({ variables: { subjectID: res.id } })
                return state(redirectTo('/d/student/subjects/'+res.id))
            } else {
                speak({ text: 'La asignatura no existe'})
            }
        }
    },{
        // Terminado
        command: 'Listar trabajos de clase',
        callback: () => {
            if(IDSubject !== ''){
                state(redirectTo('/d/student/subjects/'+IDSubject+'/tasks'))

                if(!loadingSubjectTasks1){
                    if(!dataSubjectTasks1) return speak({ text: 'No hay tareas en esta asignatura'})
                    return dataSubjectTasks1.getSubjectTasks.length > 0 ?
                        dataSubjectTasks1.getSubjectTasks.map((task, key) => {
                            return speak({ text: 'Tarea número '+(key+1)+': '+task.title })
                        })
                    : speak({ text: 'No hay tareas en esta asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Finalizado
        command: 'Seleccionar tarea número *',
        callback: (number) => {
            if(IDSubject !== ''){
                dataTask2({ variables: { subjectID: IDSubject } })
                if(!loadingSubjectTasks1){
                    if(dataSubjectTasks1.getSubjectTasks.length > 0){
                        const newNumber = numberToInt(number)
                        dataSubjectTasks1.getSubjectTasks.forEach(function(t, i){
                            if((i+1) === newNumber){
                                setIDTask(t.id)
                                dataTask2({ variables: { taskID: t.id } })
                                speak({ text: 'Tarea número '+(i+1)+' seleccionado: '+t.title })
                                return state(redirectTo('/d/student/subjects/'+IDSubject+'/tasks/'+t.id))
                            }
                        })
                    } else {
                        speak({ text: 'No hay tareas en esta asignatura'})
                    }
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Finalizado
        command: 'Información de la tarea',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!dataTask1) return speak({ text: 'No hay datos disponibles'})
                        const dataTask = dataTask1.getTask
                        const dataPass = 'Título: '+dataTask.title+'. Descripción: '+dataTask.body+
                        '. Creado el: '+dataTask.createdAt+'. Fecha de entrega: '+dataTask.deliveryDate
                        return textToVoice(dataPass, speak)
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Finalizado
        command: 'Título de la tarea',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!dataTask1) return speak({ text: 'No hay datos disponibles'})
                        return textToVoice(dataTask1.getTask.title, speak)
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Finalizado
        command: 'Descripción de la tarea',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!dataTask1) return speak({ text: 'No hay datos disponibles'})
                        return textToVoice(dataTask1.getTask.body, speak)
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Finalizado
        command: 'Fecha de entrega de la tarea',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!dataTask1) return speak({ text: 'No hay datos disponibles'})
                        return textToVoice(dataTask1.getTask.deliveryDate, speak)
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Terminado
        command: 'Listar archivos adjuntos',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!dataTask1) return speak({ text: 'No hay datos disponibles'})

                        const archives = dataTask1.getTask.archives.filter((i) => { return i.status === true })

                        if(archives){
                            archives.map((archive, i) => {
                                return textToVoice('Archivo número '+(i+1)+': '+archive.name, speak)
                            })
                        } else {
                            return textToVoice('No se encontraron archivos adjuntos en esta asignatura', speak)
                        }
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Terminado
        command: 'Seleccionar archivo número *',
        callback: (number) => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!dataTask1) return speak({ text: 'No hay datos disponibles'})
                        const archives = dataTask1.getTask.archives.filter((i) => { return i.status === true })
                        if(archives){
                            const newNumber = numberToInt(number)
                            const archive = archives.filter((archive, i) => {
                                return (i+1) === newNumber
                            })
                            setTaskArchive(archive[0])
                            if(archive[0].name.includes('.pdf')){
                                dataPDF({ variables: {
                                    subjectID: IDSubject, taskID: IDTask, userType: 'teacher', documentName: archive[0].name
                                }})
                            } else if(archive[0].name.includes('.docx')){
                                dataWORD({ variables: {
                                    subjectID: IDSubject, taskID: IDTask, userType: 'teacher', documentName: archive[0].name
                                }})
                            }
                            
                            return textToVoice(
                                'Archivo número '+newNumber+' seleccionado: '+archive[0].name, speak
                            )
                        } else {
                            return textToVoice('No se encontraron archivos adjuntos en esta asignatura', speak)
                        }
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Terminado
        command: 'Leer archivo seleccionado',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!dataTask1) return speak({ text: 'No hay datos disponibles'})
                        if(taskArchive !== ''){
                            if(taskArchive.name.includes('.pdf')){
                                if(!lPDF){
                                    const PDF = dPDF.getPDFContent
                                    textToVoice('Nombre: '+taskArchive.name, speak)
                                    textToVoice('Contenido: '+PDF.text, speak)
                                }
                            } else if(taskArchive.name.includes('.docx')){
                                if(!lWORD){
                                    const WORD = dWORD.getDocument
                                    textToVoice('Nombre: '+taskArchive.name, speak)
                                    textToVoice('Contenido: '+WORD.text, speak)
                                }
                            }
                        } else {
                            return speak({ text: 'No ha seleccionado ningún archivo'})
                        }
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Terminado
        command: 'Crear nueva tarea',
        callback: () => {
            if(newTask){
                return speak({ text: 'Ya estás creando una tarea'})
            } else {
                setNewTask(true)
                state(redirectTo('/d/student/my-tasks/add-task'))
                return speak({ text: 'Creando nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Cancelar creación de tarea',
        callback: () => {
            if(newTask){
                const object = document.querySelectorAll('.ql-editor')
                object.forEach(element => {
                    if(element.textContent.length > 0){
                        setCancelTask(true)
                        const newText = '¿Realmente quieres descartar la tarea actual? Si es así, diga: Quiero descartar la tarea actual'
                        return textToVoice(newText, speak)
                    } else {
                        setNewTask(false)
                        state(redirectTo('/d/student/my-tasks'))
                        return speak({ text: 'Creación de tarea cancelada'})
                    }
                })
            } else {
                return speak({ text: 'No estás creando ninguna tarea'})
            }
        }
    },{
        // Terminado
        command: 'Quiero descartar la tarea actual',
        callback: () => {
            if(newTask){
                if(cancelTask){
                    setCancelTask(false)
                    setNewTask(false)
                    state(redirectTo('/d/student/my-tasks'))
                    const newText = 'Tarea actual descartada. Creación de tarea cancelada'
                    return textToVoice(newText, speak)
                }
            } else {
                return speak({ text: 'No estás creando ninguna tarea'})
            }
        }
    },{
        // Terminado
        command: 'Agregar texto *',
        callback: (content) => {
            if(newTask){
                const object = document.querySelectorAll('.ql-editor')
                object.forEach(element => { element.textContent += ' '+content })
                setTaskLastContent(content)
                return textToVoice(content+' agregado', speak)
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Agregar símbolo *',
        callback: (symbol) => {
            if(newTask){
                const found = symbolsList.find(element => element.name === symbol)
                if(found){
                    const object = document.querySelectorAll('.ql-editor')
                    object.forEach(element => { element.textContent += found.symbol })
                    setTaskLastContent(found.name)
                    return textToVoice('Símbolo '+symbol+' agregado', speak)
                } else {
                    return textToVoice('No se encontró el símbolo '+symbol, speak)
                }
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Borrar lo último agregado',
        callback: () => {
            if(newTask){
                if(taskLastContent !== ''){
                    const object = document.querySelectorAll('.ql-editor')
                    object.forEach(element => {
                        if(element.textContent.includes(taskLastContent)){
                            element.textContent = element.textContent.slice(0, -(taskLastContent.length+1))
                        }
                    })
                    textToVoice('Se borró '+taskLastContent, speak)
                    return setTaskLastContent('')
                } else {
                    textToVoice('No agregó nada últimamente', speak)
                }
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Leer todo el texto',
        callback: () => {
            if(newTask){
                const object = document.querySelectorAll('.ql-editor')
                object.forEach(element => {
                    if(element.textContent.length > 0){
                        textToVoice(element.textContent, speak)
                    } else {
                        textToVoice('No hay texto para leer', speak)
                    }
                })
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Asignar título *',
        callback: (title) => {
            if(newTask){
                setTitleContent(title)
                textToVoice('Título '+title+' asignado', speak)
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Quitar título',
        callback: () => {
            if(newTask){
                setTitleContent('')
                textToVoice('Título quitado', speak)
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Guardar tarea',
        callback: () => {
            if(newTask){
                const object = document.querySelectorAll('.ql-editor')
                object.forEach(element => {
                    if(element.textContent.length > 0){
                        const myText = element.textContent
                        if(titleContent === ''){
                            return textToVoice('Primero asigna un título a la tarea', speak)
                        } else {
                            addStudentTask({ variables: { body: myText, title: titleContent } })
                            textToVoice('Tarea guardada con éxito', speak)
                            return state(redirectTo('/d/student/my-tasks/'))
                        }
                    } else {
                        textToVoice('Primero agrega un texto', speak)
                    }
                })
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        // Terminado
        command: 'Listar mis tareas',
        callback: () => {
            if(!lSTask){
                if(!dSTask){
                    return textToVoice('No se encontró ninguna tarea', speak)
                } else {
                    dSTask.getStudentTasks.map((task, i) => {
                        return textToVoice('Tarea número '+(i+1)+':'+ task.title, speak)
                    })
                }
            }
        }
    },{
        // Terminado
        command: 'Seleccionar mi tarea número *',
        callback: (number) => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!lSTask){
                            if(!dSTask){
                                return textToVoice('No se encontró ninguna tarea', speak)
                            } else {
                                if(dSTask.getStudentTasks.length > 0){
                                    const newNumber = numberToInt(number)
                                    const thisTask = dSTask.getStudentTasks.filter((task, i) => {
                                        return (i+1) === newNumber
                                    })
                                    setAttachTask(true)
                                    setSelectMyTask(thisTask[0])
                                    return textToVoice(
                                        'Su tarea número '+newNumber+' ha sido seleccionada: '+thisTask[0].title, speak
                                    )
                                } else {
                                    return textToVoice('No se encontró ninguna tarea', speak)
                                }
                            }
                        }
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Casi completo
        command: 'Adjuntar tarea seleccionada',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!lSTask){
                            if(attachTask){
                                setContentTask({ variables: {
                                    taskID: IDTask, fileName: selectMyTask.title, sTaskID: selectMyTask.id
                                }})
                                const myContentXD = document.getElementById('myContentXD')
                                ReactDOM.render(ItemRender(selectMyTask.title), myContentXD)
                                setAttachTask(false)
                                return textToVoice('Tarea adjuntada: '+selectMyTask.title, speak)
                            } else {
                                return textToVoice('No seleccionó ninguna tarea', speak)
                            }
                        }
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Terminado
        command: 'Entregar tarea',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!lSTask){
                            if(taskDelivered){
                                return textToVoice('La tarea ya está entregada', speak)
                            } else {
                                deliverTask({ variables: { taskID: IDTask }})
                                setTaskDelivered(true)
                                /*const myButtonXD = document.getElementById('myButtonXD')
                                ReactDOM.render(Item2Render, myButtonXD)*/
                                Item2Render()
                                return textToVoice('La tarea ha sido entregada con éxito', speak)
                            }
                        }
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        // Terminado
        command: 'Cancelar entrega',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        if(!lSTask){
                            if(taskDelivered){
                                cancelTaskDelivery({ variables: { taskID: IDTask }})
                                setTaskDelivered(false)
                                Item3Render()
                                return textToVoice('La entrega ha sido cancelada', speak)
                            } else {
                                return textToVoice('Aún no realizó la entrega de esta tarea', speak)
                            }
                        }
                    }
                } else {
                    return speak({ text: 'Primero seleccione una tarea de la asignatura'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    }]
}