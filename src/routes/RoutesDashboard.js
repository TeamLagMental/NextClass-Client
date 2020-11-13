// Icons
import { Explore, Apps } from '@material-ui/icons'

// Pages
//import Home from './../views/dashboard/Dashboard'
//import Subjects from './../views/dashboard/Subjects'

export const studentRoutes = {
    items: [
        {
            path: '/d/student',
            name: 'Inicio',
            type: 'link',
            icon: Explore,
            component: () => { return (<div>Student</div>) }
        },{
            path: '/d/student/subjects',
            name: 'Materias',
            type: 'link',
            icon: Apps,
            component: () => { return (<div>Materias del alumno</div>) }
        }
    ]
}

export const teacherRoutes = {
    items: [
        {
            path: '/d/teacher',
            name: 'Inicio',
            type: 'link',
            icon: Explore,
            component: () => { return (<div>Teacher</div>) },
            render: true,
            rank: 2
        }
    ]
}

export const adminRoutes = {
    items: [
        {
            path: '/d/admin',
            name: 'Inicio',
            type: 'link',
            icon: Explore,
            component: () => { return (<div>Admin</div>) },
            render: true,
            rank: 3
        }
    ]
}