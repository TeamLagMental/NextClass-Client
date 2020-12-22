import { Explore, Apps, ThreeDRotation, EventNote, Assignment } from '@material-ui/icons'
import ClassIcon from '@material-ui/icons/Class';
import BuildIcon from '@material-ui/icons/Build';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';

import { DStudentCareer, DAdminUsers, DAdminConfigs} from './../screens'
import DAdminMaterias from './../screens/dashboard/admin/DAdminMaterias'
import DAdminCarr from './../screens/dashboard/admin/DAdminCarr'

import {
    DStudentHome, DStudentSubjects, DStudentCareers, DStudentCalendar, DStudentMyTasks,
    DStudentAddTask,

    // Teacher
    DTeacherHome, DTeacherSubjects, DTSubjectHome, DTSubjectTasks, DTSubjectTask, DTSubjectLessons
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
            icon: MenuBookIcon,
            component: DStudentCareers
        },{
            path: '/d/student/career',
            type: 'link',
            component: DStudentCareer,
            noMenu: true
        },{
            path: '/d/student/subjects',
            name: 'Asignaturas',
            type: 'link',
            icon: ClassIcon,
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
            component: DTeacherHome,
            render: true,
            rank: 2
        },{
            path: '/d/teacher/careers',
            name: 'Carreras',
            type: 'link',
            icon: ThreeDRotation,
            component: DStudentCareers
        },{
            path: '/d/teacher/subjects',
            name: 'Asignaturas',
            type: 'link',
            icon: Apps,
            component: DTeacherSubjects
        },{
            path: '/d/teacher/subjects/:id',
            type: 'link',
            component: DTSubjectHome,
            noMenu: true
        },{
            path: '/d/teacher/subjects/:id/tasks',
            type: 'link',
            component: DTSubjectTasks,
            noMenu: true
        },{
            path: '/d/teacher/subjects/:id/tasks/:taskID',
            type: 'link',
            component: DTSubjectTask,
            noMenu: true
        },{
            path: '/d/teacher/subjects/:id/lessons',
            type: 'link',
            component: DTSubjectLessons,
            noMenu: true
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
            component: DTeacherHome,
            render: true,
            rank: 3
        },{
            path: '/d/admin/careers',
            name: 'Carreras',
            type: 'link',
            icon: MenuBookIcon,
            component: DStudentCareers,
            render: true,
            rank: 3
        },{
            path: '/d/admin/career',
            name: 'Carreras',
            type: 'link',
            icon: MenuBookIcon,
            component: DStudentCareer,
            render: true,
            rank: 3
        },{
            path: '/d/admin/users',
            name: 'Usuarios',
            type: 'link',
            icon: PeopleIcon,
            component: DAdminUsers,
            render: true,
            rank: 3
        },{
            path: '/d/admin/config',
            name: 'Configuracion',
            type: 'link',
            icon: BuildIcon,
            component: DAdminConfigs,
            render: true,
            rank: 3
        },{
            path: '/d/admin/materias',
            name: 'Materias',
            type: 'link',
            icon: BuildIcon,
            component: DAdminMaterias,
            render: true,
            rank: 3
        },{
            path: '/d/admin/carrera/edit',
            name: 'Carrera',
            type: 'link',
            icon: BuildIcon,
            component: DAdminCarr,
            render: true,
            rank: 3
        }
    ]
}