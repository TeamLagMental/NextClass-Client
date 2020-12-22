import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Wrapper, SubjectTabs } from './../../../../../components/dashboard'
import DSSubjectNewPosts from './DSSubjectNewPosts'
import DSSubjectPublicPosts from './DSSubjectPublicPosts'
import DSSubjectCreatePost from './DSSubjectCreatePost'
import { GETSUBJECT } from '../../../../../utils'

function DSSubjectHome(props){
    const subjectId = props.match.params.id
    const { loading, error, data } = useQuery(GETSUBJECT, { variables: { subjectId } });

    if (loading) return <></>
    if (error) return <>ERROR</>

    return (
        <>
        <SubjectTabs subjectID={subjectId}/>
        <Wrapper>
            <Card>
                <CardMedia image={data.getSubject.image} style={{ paddingTop: 270 }}/>
                <CardContent>
                    <Typography variant="body2" component="p">
                        {data.getSubject.name}
                    </Typography>
                </CardContent>
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