import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GETUSER } from './../index'

function GetUserInitials(props){
    const userId = props.userId
    const { loading, error, data } = useQuery(GETUSER, {
        variables: { userId }
    })

    if(error) return <>ERROR...</>
    if(loading) return <>...</>

    const cadena = data.getUser.lastNames + ' ' + data.getUser.names
    const arregloDeSubCadenas = cadena.split(' ')
    let arr = []
    
    for(let x=0; x<arregloDeSubCadenas.length; x++){
        const subCadena = arregloDeSubCadenas[x].substring(0, 1)
        arr.push(subCadena)
    }

    return arr[0] + arr[1]
}

export default GetUserInitials