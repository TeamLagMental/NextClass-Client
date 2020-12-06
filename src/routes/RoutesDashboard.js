import { Explore, Apps, ThreeDRotation } from '@material-ui/icons'
import { DStudentHome, DStudentSubjects, DStudentCareers } from './../screens'

import DSSubjectHome from './../screens/dashboard/student/subjects/homeContents/DSSubjectHome'
import DSubjectTasks from './../screens/dashboard/student/subjects/tasksContents/DSubjectTasks'
import DSubjectTask from './../screens/dashboard/student/subjects/tasksContents/DSubjectTask'

export const studentRoutes = {
    items: [
        {
            path: '/d/student',
            name: 'Inicio',
            type: 'link',
            icon: Explore,
            component: DStudentHome
        },{
            path: '/d/student/careers',
            name: 'Carreras',
            type: 'link',
            icon: ThreeDRotation,
            component: DStudentCareers
        },{
            path: '/d/student/subjects',
            name: 'Materias',
            type: 'link',
            icon: Apps,
            component: DStudentSubjects
        },{
            path: '/d/student/subjects/:id',
            type: 'link',
            component: DSSubjectHome,
            noMenu: true
        },{
            path: '/d/student/subjects/:id/tasks',
            type: 'link',
            component: DSubjectTasks,
            noMenu: true
        },{
            path: '/d/student/subjects/:id/tasks/:taskID',
            type: 'link',
            component: DSubjectTask,
            noMenu: true
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