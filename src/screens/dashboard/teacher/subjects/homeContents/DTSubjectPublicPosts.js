import React from 'react'
import { useSubscription } from '@apollo/react-hooks'
import { PostsCard } from '../../../../../components/dashboard'
import { GETSUBJECTPOSTS } from '../../../../../utils'

function DSSubjectPublicPosts(props){
    const subjectID = props.subjectID
    const { loading, error, data } = useSubscription(GETSUBJECTPOSTS, { variables: { subjectID } });

    if (loading) return <></>
    if (error) return <div>ERROR INESPERADO</div>
    if(data){
        const postData = data.getSubjectPosts
        return postData.map((subject, key) => {    
            return <PostsCard data={subject} key={key} k={key}/>
        })
    }
}

export default DSSubjectPublicPosts