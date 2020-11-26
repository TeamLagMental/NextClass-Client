import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
//import Say from 'react-say';

import { useSpeechSynthesis } from 'react-speech-kit';

const StudentCommands = () => {
  const [statusSR, setStatusSR] = useState(false)
  const [textButtonSR, setTextButtonSR] = useState('Activar')
  const [message, setMessage] = useState('')

  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  const commands = [
    {
      command: 'Ir a materias',
      callback: () => speak({ text: 'Yendo a materias' }) + setMessage('Hi')
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

      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={() => speak({ text: value })}>Speak</button>
    </div>
  )
}

export default StudentCommands