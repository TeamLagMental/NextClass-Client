import { DashboardLayout, GeneralLayout } from "./layouts"
import {
    Home,
    Login,
    DHome
} from './screens'

const items = [
    {
        path: "/",
        exact: true,
        layout: GeneralLayout,
        component: Home,
        authRoute: false,
        privateAccessRoute: false
    },
    {
        path: "/login",
        exact: true,
        layout: GeneralLayout,
        component: Login,
        authRoute: true,
        privateAccessRoute: false
    },
    {
        path: "/dashboard",
        exact: true,
        layout: DashboardLayout,
        component: DHome,
        authRoute: false,
        privateAccessRoute: true,
        aId: 1
    }
]

export default items