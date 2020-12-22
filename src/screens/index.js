import DStudentSubjects from './dashboard/student/subjects/DStudentSubjects'
import DStudentCareers from './dashboard/student/careers/DStudentCareers'
import DStudentCalendar from './dashboard/student/DStudentCalendar'
import HomeLive from './live/HomeLive'
import Live from './live/Live'

import DStudentCareer from './dashboard/student/careers/DStudentCareer'
import DAdminCareers from './dashboard/admin/DAdminCareers'
import DAdminUsers from './dashboard/admin/DAdminUsers'
import DAdminConfigs from './dashboard/admin/DAdminConfigs'

/* ------------ EXPORTS ------------ */

// Generals
export { Home } from './generals/Home'
export { Login } from './generals/Login'

// Dashboard
export { SelectType } from './dashboard/SelectType'

/* ------------------------------------ Dashboard - Student */
export { DStudentHome } from './dashboard/student/DStudentHome'
export { DStudentSubjects, DStudentCareers, DStudentCareer }
export { DStudentCalendar }
export { DStudentMyTasks } from './dashboard/student/DStudentMyTasks'
export { DStudentAddTask } from './dashboard/student/tasks/DStudentAddTask'

/* ------------------------------------ Dashboard - Teacher */
export { DTeacherHome } from './dashboard/teacher/DTeacherHome'
export { DTeacherSubjects } from './dashboard/teacher/subjects/DTeacherSubjects'
export { DTSubjectHome } from './dashboard/teacher/subjects/homeContents/DTSubjectHome'
export { DTSubjectTasks } from './dashboard/teacher/subjects/tasksContents/DTSubjectTasks'
export { DTSubjectTask } from './dashboard/teacher/subjects/tasksContents/DTSubjectTask'
export { DTSubjectLessons } from './dashboard/teacher/subjects/lessonsContents/DTSubjectLessons'

// Dashboard - Admin
export {DAdminCareers, DAdminUsers, DAdminConfigs}

// Live
export { HomeLive, Live }