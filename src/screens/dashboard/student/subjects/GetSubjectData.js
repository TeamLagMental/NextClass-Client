import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Grid, Avatar } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { PostCard } from './../../../../components/dashboard'
import { AuthContext } from './../../../../context/auth'
import { GETSUBJECT, GETUSERCAREERS, GetUserInitials, GetCareerName } from '../../../../utils'

export const GetSubjectData = (props) => {
    const subjectId = props.subjectId
    const { user } = useContext(AuthContext)
    const { loading, error, data } = useQuery(GETSUBJECT, { variables: { subjectId } })

    const { loading: lUser, error: eUser, data: dUser } = useQuery(GETUSERCAREERS, { variables: { userId: user.id } })


    if(loading) return <>Cargando...</>
    if(lUser) return <>Cargando...</>
    if(error) return <>ERROR</>
    if(!data) return <>...</>

    const sData = data.getSubject

    //console.log(dUser.getUserCareers)

    /*const items = dUser.getUserCareers.find(function(career){
        //if(sData.careers.includes(career.id)){
        //    return 'yes my lord'
        //}
        sData.careers.includes(career.id)
    })*/

    /*if(sData.careers.includes(dUser.getUserCareers.id)){
        console.log('Yes')
    } else {
        console.log('No')
    }*/

    /*
    if(dUser.getUserCareers.includes(sData.careers.id)){
        console.log('Yes')
    } else {
        console.log('No')
    }*/

/*
    let myCareerID
    for (let i in sData.careers){
        if(sData.careers[i].id === dUser.getUserCareers[i].id){
            myCareerID = dUser.getUserCareers[i].id
        }
    }

    console.log(myCareerID)*/

    return(
        <Grid item xs={12} sm={4} md={4}>
            <PostCard
                title={sData.name}
                subtitle="Profesorado en Matemática" //{<GetCareerName careerId={sData.}/>}
                image={sData.image}
                imageHeight={150}
                text={sData.description}
                avatar={
                    <Avatar aria-label="Post" style={{ backgroundColor: blue[500] }}>
                        <GetUserInitials userId={sData.teacher} />
                    </Avatar>
                }
                link={`/d/student/subjects/${sData.id}`}
            />
        </Grid>
    )
}