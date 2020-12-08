import DStudentSubjects from './dashboard/student/subjects/DStudentSubjects'
import DStudentSubject from './dashboard/student/subjects/DStudentSubject'
import DStudentCareers from './dashboard/student/careers/DStudentCareers'
import DStudentCareer from './dashboard/student/careers/DStudentCareer'
import DAdminCareers from './dashboard/admin/DAdminCareers'
import DAdminUsers from './dashboard/admin/DAdminUsers'
import Live from './live/Live'
import LiveHome from './live/LiveHome'

/* ------------ EXPORTS ------------ */

// Generals
export { Home } from './generals/Home'
export { Login } from './generals/Login'
export { DH } from './dashboard/DHomes'

// Dashboard
export { SelectType } from './dashboard/SelectType'

// Dashboard - Student
export { DStudentHome } from './dashboard/student/DStudentHome'
export { DStudentSubjects, DStudentSubject, DStudentCareers, DStudentCareer}

// Dashboard - Teacher

// Dashboard - Admin
export {DAdminCareers, DAdminUsers}
// Live
export { Live, LiveHome }