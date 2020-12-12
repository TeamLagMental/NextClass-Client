import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
            <Card>
                <CardMedia
                    image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                    title="Nombre de la Institucion"
                    style={{ paddingTop: 270 }}
                />
            </Card>
            <br></br>
            <DSSubjectCreatePost subjectID={subjectId}/>
            <DSSubjectNewPosts subjectID={subjectId}/>
            <DSSubjectPublicPosts subjectID={subjectId}/>
        </Wrapper>
        </>
    )
}

export default DSSubjectHome