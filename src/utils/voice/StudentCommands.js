import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'

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

    return [{
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
        command: 'Cuantas materias me llevo',
        callback: () => speak({ text: 'Te llevás todas las materias, mi rey' })
    }]
}