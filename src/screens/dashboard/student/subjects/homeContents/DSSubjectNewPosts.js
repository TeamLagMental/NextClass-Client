import React from 'react'
import { useSubscription } from '@apollo/react-hooks'
import { NEWPOSTS } from '../../../../../utils'
import { PostsCard } from '../../../../../components/dashboard'

function DSSubjectNewPosts(props){
    const subjectID = props.subjectID
    const { loading, error, data } = useSubscription(NEWPOSTS, {});

    if (loading) return <></>
    if (error) return <div>ERROR INESPERADO</div>
    if(data){
        const postData = data.newPost
        return postData.subjectID === subjectID ? (<PostsCard data={postData} k={1}/>) : (<></>)
    }
}

export default DSSubjectNewPosts