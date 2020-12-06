import React from 'react'
import { Wrapper, SubjectTabs } from './../../../../../components/dashboard'
import DSSubjectNewPosts from './DSSubjectNewPosts'
import DSSubjectPublicPosts from './DSSubjectPublicPosts'
import DSSubjectCreatePost from './DSSubjectCreatePost'

function DSSubjectHome(props){
    const subjectId = props.match.params.id

    return (
        <>
        <SubjectTabs subjectID={subjectId}/>
        <Wrapper>
            <DSSubjectCreatePost subjectID={subjectId}/>
            <DSSubjectNewPosts subjectID={subjectId}/>
            <DSSubjectPublicPosts subjectID={subjectId}/>
        </Wrapper>
        </>
    )
}

export default DSSubjectHome