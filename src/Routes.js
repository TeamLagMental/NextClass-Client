import { Redirect } from 'react-router-dom'
import { Home, Login, SelectType, Live } from './screens'
import { DStudentLayout, DTeacherLayout, DAdminLayout } from "./layouts"

import HomeA from './screens/live/Home'

const items = [
    {
        path: "/",
        component: Home,
        authRoute: false,
        privateAccessRoute: false
    },{
        path: "/login",
        component: Login,
        authRoute: true,
        privateAccessRoute: false
    },{
        path: "/s",
        component: SelectType,
        authRoute: false,
        privateAccessRoute: false
    },{
        path: "/d",
        component: () => <Redirect to="/s"/>,
        authRoute: false,
        privateAccessRoute: false
    },{
        path: "/d/student",
        component: DStudentLayout,
        authRoute: false,
        privateAccessRoute: true,
        aId: 1
    },{
        path: "/d/teacher",
        component: DTeacherLayout,
        authRoute: false,
        privateAccessRoute: true,
        aId: 2
    },{
        path: "/d/admin",
        component: DAdminLayout,
        authRoute: false,
        privateAccessRoute: true,
        aId: 3
    },{
        path: "/live",
        component: HomeA,
        authRoute: false,
        privateAccessRoute: false
    },{
        path: "/live/:url",
        component: Live,
        authRoute: false,
        privateAccessRoute: false
    }
]

export default items