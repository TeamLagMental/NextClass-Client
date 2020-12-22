import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid, Avatar } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { PostCard } from './../../../../components/dashboard'
import { GETSUBJECT, GetUserInitials } from '../../../../utils'

export const GetSubjectData = (props) => {
    const subjectId = props.subjectId
    const { loading, error, data } = useQuery(GETSUBJECT, { variables: { subjectId } })

    if(loading) return <>Cargando...</>
    if(error) return <>ERROR</>
    if(!data) return <>...</>

    const sData = data.getSubject

    return(
        <Grid item xs={12} sm={4} md={4}>
            <PostCard
                title={sData.name}
                subtitle="Profesorado en Matemática"
                image={sData.image}
                imageHeight={150}
                text={sData.description}
                avatar={
                    <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                        <GetUserInitials userId={sData.teacher} />
                    </Avatar>
                }
                link={`/d/teacher/subjects/${sData.id}`}
            />
        </Grid>
    )
}