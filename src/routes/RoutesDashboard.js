import { Explore, Apps, ThreeDRotation } from '@material-ui/icons'
import { DStudentHome, DStudentSubjects, DStudentSubject, DStudentCareers, DH} from './../screens'

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
            component: DStudentSubject,
            noMenu: true
        },{
            path: '/d/student/subjects/:id/tasks',
            type: 'link',
            component: DStudentSubject,
            noMenu: true
        },{
            path: '/d/student/subjects/:id/progress',
            type: 'link',
            component: DStudentSubject,
            noMenu: true
        },{
            path: '/d/student/subjects/:id/people',
            type: 'link',
            component: DStudentSubject,
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
            component: DH,
            render: true,
            rank: 2
        },{
            path: '/d/teacher/careers',
            name: 'Carreras',
            type: 'link',
            icon: ThreeDRotation,
            component: DStudentCareers,
            render: true,
            rank: 2
        },{
            path: '/d/teacher/classrooms',
            name: 'Aulas',
            type: 'link',
            icon: Apps,
            component: DStudentSubjects,
            render: true,
            rank: 2
        },
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