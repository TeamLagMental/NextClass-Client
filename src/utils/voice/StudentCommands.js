import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { GETSUBJECTSUSER, GETSUBJECTTASKS, GETTASK } from './../'
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

export const StudentCommands = (state) => {
    const synth = window.speechSynthesis
    const { speak } = useSpeechSynthesis()
    const { user } = useContext(AuthContext)

    const [IDSubject, setIDSubject] = useState('')
    const [IDTask, setIDTask] = useState('')
    const [newTask, setNewTask] = useState(false)
    const [cancelTask, setCancelTask] = useState(false)
    const [attachTask, setAttachTask] = useState(false)
    const [taskLastContent, setTaskLastContent] = useState('')

    const { data: dataSubjectUser1 } = useQuery(GETSUBJECTSUSER, { variables: { userId: user.id } })
    const [dataTask2, { data: dataTask1, loading: loadingDataTask1 }] = useLazyQuery(GETTASK)
    const [dataSubjectTasks2, {
        data: dataSubjectTasks1, loading: loadingSubjectTasks1
    }] = useLazyQuery(GETSUBJECTTASKS)

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
                speak({ text: 'No se encontró el directorio '+directory })
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
                const object = document.querySelectorAll('.ql-editor')
                object.forEach(element => { element.textContent += found.symbol })
                setTaskLastContent(found.name)
                return textToVoice('Símbolo '+symbol+' agregado', speak)
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
                return object.forEach(element => { textToVoice(element.textContent, speak) })
            } else {
                return speak({ text: 'Primero crea una nueva tarea'})
            }
        }
    },{
        //
        command: 'Adjuntar tarea realizada',
        callback: () => {
            if(IDSubject !== ''){
                if(IDTask !== ''){
                    if(!loadingDataTask1){
                        setAttachTask(true)
                        if(attachTask){
                            const dataTask = dataTask1.getTask

                            

                            return speak({ text: 'Adjuntando...'})
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