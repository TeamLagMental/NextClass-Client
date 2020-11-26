import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSpeechSynthesis } from 'react-speech-kit'

const studentCommandsDirectories = [
    {
        name: 'inicio',
        uri: '/d/student'
    },
    {
        name: 'materias',
        uri: '/d/student/subjects'
    }
]

const redirectTo = (uri) => <Redirect to={ uri }/>

export const StudentCommands = (state) => {
    const { speak } = useSpeechSynthesis()

    return [{
        command: 'Quiero ir a *',
        callback: (directory) => {
            const found = studentCommandsDirectories.find(element => element.name === directory)
            
            if(found){
                speak({ text: 'Yendo a '+directory })
                return state(redirectTo(found.uri))
            } else {
                speak({ text: 'No se encontró el directorio '+directory })
                //alert('No se encontró el directorio...')
            }
        }
    }]
}