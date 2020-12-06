import React from 'react'
import { PublishPostCard } from '../../../../../components/dashboard'
import { SETPOST } from '../../../../../utils'

function DSSubjectCreatePost(props){
    const subjectID = props.subjectID

    return (
        <div>
            <PublishPostCard subjectID={subjectID} mutation={SETPOST}/>
        </div>
    )
}

export default DSSubjectCreatePost