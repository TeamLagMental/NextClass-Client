import GetUserInitials from './panel/GetUserInitials'
import GetUserNames from './panel/GetUserNames'

import Language from './Language'
export { Language }

export { AuthRoute, PrivateAccessRoute } from './AuthRoute'
export { FETCH_POSTS_QUERY } from './graphql'
export { useForm } from './hooks'

// FUNCTIONS **
export { dateFormat } from './functions/dateFormat'

// MUTATIONS
export { LOGIN_USER, STUDENT_SUBJECTS, SUBJECTS, TEACHER } from './resolvers/Mutations'
export { SETPOST } from './resolvers/Post/PostMutation'
export {
    EDITTASK, UPLOAD_FILES_TASK, SET_CONTENT_TASK, PUBLICUPLOADFILESTASK, DELIVERTASK, CANCELTASKDELIVERY
} from './resolvers/Task/TaskMutation'
export { CREATESTUDENTTASK } from './resolvers/StudentTask/StudentTaskMutation'

// QUERYS
export { GETCAREER, GETCAREERS } from './resolvers/Career/CareerQuery'
export { GETSUBJECT, GETSUBJECTSUSER } from './resolvers/Subject/SubjectQuery'
export { GETUSER, GETUSERSUBJECTS, GETUSERCAREERS } from './resolvers/User/UserQuery'
export { GETPOSTS, GETSUBJECTPOSTS } from './resolvers/Post/PostQuery'
export { GETTASK, GETTASKS, GETSUBJECTTASKS } from './resolvers/Task/TaskQuery'
export { GETLESSONS, GETSUBJECTLESSONS } from './resolvers/Lesson/LessonQuery'
export { GETSTUDENTTASKS, GETSTUDENTTASK } from './resolvers/StudentTask/StudentTaskQuery'
export { GETPDFCONTENT, GETWORDCONTENT } from './resolvers/Other/OtherQuery'

// SUBSCRIPTIONS
export { NEWPOSTS } from './resolvers/Post/PostSubscriptions'

// PANEL
export { GetUserInitials, GetUserNames }