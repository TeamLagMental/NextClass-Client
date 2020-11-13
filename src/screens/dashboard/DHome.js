import React, { useContext } from 'react'
import { AuthContext } from './../../context/auth'

import { StudentDHome } from './student'

export const DHome = () => {
    const { user } = useContext(AuthContext)

    return user.access_id < 2 ? (
        <StudentDHome />
    ) : user.access_id < 3 ? (
        <div>Profesor</div>
    ) : (
        <div>Administrador</div>
    )
}