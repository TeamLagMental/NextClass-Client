import React, { useContext } from 'react'
import { Grid, Avatar } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { useQuery } from '@apollo/react-hooks'
import { PostCard, Wrapper } from './../../../components/dashboard'
import { STUDENT_SUBJECTS } from './../../../utils'
import { AuthContext } from './../../../context/auth'

function DStudentSubjects({userId}){
    const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(STUDENT_SUBJECTS, {
        variables: { userId: user.id }
    })
    
    if (loading) return <p>loading...</p>
    if (error) return <p>ERROR</p>
    if (!data) return <p>No se encuentra registrado en ninguna asignatura</p>
      
    return (
        <Wrapper>
            <Grid container spacing={1}>
                {data.getSubjectsUser.map((subject) =>
                    <Grid item xs={12} sm={4} md={4} key={subject.id}>
                        <PostCard
                            title={subject.name}
                            subtitle="Yesterday"
                            image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
                            imageHeight={150}
                            text={subject.description}
                            avatar={
                                <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                                    RL
                                </Avatar>
                            }
                            link={`/d/student/subjects/${subject.id}`}
                        />
                    </Grid>
                )}
            </Grid>
        </Wrapper>
    )

    /*
    const { loading, error, data } = useQuery(SUBJECTS)
  
    if (loading) return <p>loading...</p>;
    if (error) return <p>ERROR</p>;
    if (!data) return <p>Not found</p>;
    
    return (
        <div>
            Datos aquí
            {
                //data.id
            }
        </div>
    )
    */
}

export default DStudentSubjects