import React, { useContext } from 'react'
import Live from './Live'
import { AuthContext } from './../../context/auth'

function HomeLive(props){
    const subjectID = props.match.params.subjectID
    //const lessonID = props.match.params.lessonID
    const { user } = useContext(AuthContext)

    const name = user.lastNames+' '+user.names+' '+user.secondNames

    return <Live username={name} subjectID={subjectID}/>
}

export default HomeLive