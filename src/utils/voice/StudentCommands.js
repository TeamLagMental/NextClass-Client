import React from 'react'
import { Redirect } from 'react-router-dom'

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

export const studentCommands = (state) => [
    {
        command: 'Quiero ir a *',
        callback: (directory) => {
            const found = studentCommandsDirectories.find(element => element.name === directory)

            if(found){
                return state(redirectTo(found.uri))
            } else {
                alert('No se encontró el directorio...')
            }
        }
    }
]