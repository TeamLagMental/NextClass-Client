import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Redirect } from 'react-router-dom'

const StudentCommands = () => {
    const [statusSR, setStatusSR] = useState(false)
    const [textButtonSR, setTextButtonSR] = useState('Activar')
    const [message, setMessage] = useState('')
    const redirectTo = (uri) => {
      console.log(`Está siendo redirigido a: ${uri}`)
      return <Redirect to={ uri } />
    }

    const directories = [
      {
        name: 'inicio',
        uri: '/d/'
      },
      {
        name: 'materias',
        uri: '/d/student/subjects'
      }
    ]

    const commands = [
      {
        command: 'Quiero redireccionar a *',
        callback: (directory) => {
          const found = directories.find(element => element.name === directory)

          if(found){
            alert('redireccionando...')
            return setMessage(redirectTo(found.uri))
          } else {
            alert('No se encontró el directorio...')
          }
        }
      },{
        command: 'Hola',
        callback: () => setMessage('Hola, amigo!'),
        matchInterim: true
      }
    ]

    const { transcript } = useSpeechRecognition({ commands })

    const enableSR = () => {
      if(!SpeechRecognition.browserSupportsSpeechRecognition()){
        alert('Tu navegador no soporta esto...')
      } else {
        if(statusSR){
          alert('Desactivado mi rey. Vuelva pronto...')
          SpeechRecognition.stopListening()
          setTextButtonSR('Activar')
          return false
        } else {
          SpeechRecognition.startListening({ continuous: true, language: 'es-AR' })
          alert('Activado. Empieza a hablar...')
          setTextButtonSR('Desactivar')
          return true
        }
      }
    }

    return (
      <div>
        <button onClick={() => setStatusSR(enableSR)}>{textButtonSR}</button>
        <p>{message}</p>
        <p>{transcript}</p>
      </div>
    )
}

export default StudentCommands