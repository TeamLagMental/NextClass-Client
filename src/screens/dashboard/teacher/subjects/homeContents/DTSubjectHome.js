import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Wrapper, SubjectTeacherTabs } from '../../../../../components/dashboard'
import DTSubjectNewPosts from './DTSubjectNewPosts'
import DTSubjectPublicPosts from './DTSubjectPublicPosts'
import DTSubjectCreatePost from './DTSubjectCreatePost'
import { GETSUBJECT } from '../../../../../utils'

export function DTSubjectHome(props){
    const subjectId = props.match.params.id
    const { loading, error, data } = useQuery(GETSUBJECT, { variables: { subjectId } });

    if (loading) return <></>
    if (error) return <>ERROR</>

    return (
        <>
        <SubjectTeacherTabs subjectID={subjectId}/>
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
            <DTSubjectCreatePost subjectID={subjectId}/>
            <DTSubjectNewPosts subjectID={subjectId}/>
            <DTSubjectPublicPosts subjectID={subjectId}/>
        </Wrapper>
        </>
    )
}