import { Redirect } from 'react-router-dom'
import { Home, Login, SelectType, Live } from './screens'
import { DStudentLayout, DTeacherLayout, DAdminLayout } from "./layouts"

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
        path: "/live/:roomID",
        component: Live,
        authRoute: false,
        privateAccessRoute: true,
        aId: 1
    }
]

export default items