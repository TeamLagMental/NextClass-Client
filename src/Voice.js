import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Redirect } from 'react-router-dom'

const Dictaphone = () => {
  const [statusSR, setStatusSR] = useState(false)
  const [textButtonSR, setTextButtonSR] = useState('Activar')
  const [message, setMessage] = useState('')
  const redireccionar = () => <Redirect to="/d/student/subjects"/>

  const commands = [
    {
      command: 'Quiero ordenar una *',
      callback: (food) => setMessage(`Tu orden es: ${food}`)
    },{
      command: 'materias',
      callback: () => setMessage(redireccionar)
    },{
      command: 'Hello',
      callback: () => setMessage('Hi there!'),
      matchInterim: true
    },{
      command: 'limpiar',
      callback: ({ resetTranscript }) => resetTranscript()
    },{
      command: 'inicio',
      callback: () => setMessage(() => <Redirect to="/d/"/>)
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

export default Dictaphone