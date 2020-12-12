import { Explore, Apps, ThreeDRotation, EventNote, Assignment } from '@material-ui/icons'
import {
    DStudentHome, DStudentSubjects, DStudentCareers, DStudentCalendar, DStudentMyTasks,
    DStudentAddTask
} from './../screens'

import DSSubjectHome from './../screens/dashboard/student/subjects/homeContents/DSSubjectHome'
import DSubjectTasks from './../screens/dashboard/student/subjects/tasksContents/DSubjectTasks'
import DSubjectTask from './../screens/dashboard/student/subjects/tasksContents/DSubjectTask'
import DSubjectLessons from './../screens/dashboard/student/subjects/lessonsContents/DSubjectLessons'

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
        },{
            path: '/d/student/subjects/:id/lessons',
            type: 'link',
            component: DSubjectLessons,
            noMenu: true
        },{
            path: '/d/student/my-tasks',
            name: 'Mis tareas',
            type: 'link',
            icon: Assignment,
            component: DStudentMyTasks
        },{
            path: '/d/student/my-tasks/add-task',
            type: 'link',
            component: DStudentAddTask,
            noMenu: true
        },{
            path: '/d/student/calendars',
            name: 'Calendarios',
            type: 'submenu',
            icon: EventNote,
            children: [
                {
                    path: '/lessons-calendar',
                    name: 'Calendario de clases',
                    component: DStudentCalendar
                },{
                    path: '/lessons-list',
                    name: 'Lista de clases',
                    component: () => { return (<div>Lista de clases</div>) }
                },{
                    path: '/events',
                    name: 'Eventos',
                    component: () => { return (<div>Eventos</div>) }
                }
            ]
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