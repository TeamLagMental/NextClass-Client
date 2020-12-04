import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid } from '@material-ui/core'
import { Wrapper, Loader1 } from './../../../../components/dashboard'
import { GETUSERSUBJECTS } from './../../../../utils'
import { AuthContext } from './../../../../context/auth'

import { GetSubjectData } from './GetSubjectData'

function DStudentSubjects(){
    const { user } = useContext(AuthContext)
    const {
        loading: loadingSubjects,
        error: errorSubjects,
        data : dataSubjects
    } = useQuery(GETUSERSUBJECTS, { variables: { userId: user.id } })
    
    if(loadingSubjects) return <Loader1/>
    if(errorSubjects) return <p>ERROR</p>
    if(!dataSubjects) return <p>No se encuentra registrado en ninguna asignatura</p>

    return (
        <Wrapper>
            <Grid container spacing={1}>
                {
                    dataSubjects.getUserSubjects.map((subject, key) =>
                        {    
                            return subject.student === true ? (
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

export default DStudentSubjects