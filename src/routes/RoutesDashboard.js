import { Explore, Apps} from '@material-ui/icons'
import ClassIcon from '@material-ui/icons/Class';
import BuildIcon from '@material-ui/icons/Build';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import { DStudentSubjects, DStudentSubject, DStudentCareers, DH, DStudentCareer, DAdminUsers, DAdminConfigs} from './../screens'

export const studentRoutes = {
    items: [
        {
            path: '/d/student',
            name: 'Inicio',
            type: 'link',
            icon: Explore,
            component: DH,
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
            name: 'Materias',
            type: 'link',
            icon: ClassIcon,
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
            icon: MenuBookIcon,
            component: DStudentCareers,
            render: true,
            rank: 2
        },{
            path: '/d/teacher/classrooms',
            name: 'Aulas',
            type: 'link',
            icon: ClassIcon,
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
            component: DH,
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
        }
    ]
}