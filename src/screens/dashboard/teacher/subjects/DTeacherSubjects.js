import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { Wrapper, Loader1 } from '../../../../components/dashboard'
import { GETUSERSUBJECTS } from '../../../../utils'
import { AuthContext } from '../../../../context/auth'
import { GetSubjectData } from './GetSubjectData'

export function DTeacherSubjects(){
    const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(GETUSERSUBJECTS, { variables: { userId: user.id } })
    
    if(loading) return <Loader1/>
    if(error) return <p>ERROR</p>
    if(!data) return <p>No se encuentra registrado en ninguna asignatura</p>

    return (
        <Wrapper>
            <Grid container spacing={1}>
                {
                    data.getUserSubjects.map((subject, key) =>
                        {
                            return subject.teacherT === true || subject.teacherA === true ? (
                                <GetSubjectData subjectId={subject.id} key={key}/>
                            ) : (
                                <></>
                            )
                        }
                    )
                }
            </Grid>

        </Wrapper>
    )
}