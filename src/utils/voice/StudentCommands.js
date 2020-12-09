import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
//import { useLazyQuery } from '@apollo/client';
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

const redirectTo = (uri) => <Redirect to={ uri }/>

export const StudentCommands = (state) => {
    const { speak } = useSpeechSynthesis()
    const { user } = useContext(AuthContext)
    const [IDSubject, setIDSubject] = useState('')
    const [IDTask, setIDTask] = useState('')
    const { data: dataSubjectUser1 } = useQuery(GETSUBJECTSUSER, { variables: { userId: user.id } })
    const [dataTask2, { data: dataTask1, loading: loadingDataTask1 }] = useLazyQuery(GETTASK)
    const [dataSubjectTasks2, {
        data: dataSubjectTasks1, loading: loadingSubjectTasks1
    }] = useLazyQuery(GETSUBJECTTASKS)

    return [{
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
                    return speak({ text: 'Primero seleccione una tarea'})
                }
            } else {
                return speak({ text: 'Primero seleccione una asignatura'})
            }
        }
    },{
        command: 'Adjuntar tarea',
        callback: () => {
            
        }
    },{
        command: 'Callarse',
        callback: () => {

        }
    }]
}