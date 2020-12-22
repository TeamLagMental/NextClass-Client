import gql from 'graphql-tag'

export const EDITTASK = gql`
    mutation editTask($taskID: ID!, $title: String!, $body: String!, $deliveryDate: String!){
        publicUploadFilesTask(taskID: $taskID, title: $title, body: $body, deliveryDate: $deliveryDate){
            id
            subjectID
            title
            body
            deliveryDate
        }
    }
`

export const UPLOAD_FILES_TASK = gql`
    mutation uploadFilesTask($taskID: ID!, $type: String!, $fileName: String!){
        uploadFilesTask(taskID: $taskID, type: $type, fileName: $fileName){
            archives{
                name
            }
        }
    }
`
// taskID, fileName, sTaskID
export const SET_CONTENT_TASK = gql`
    mutation setContentTask($taskID: ID!, $fileName: String!, $sTaskID: ID!){
        setContentTask(taskID: $taskID, fileName: $fileName, sTaskID: $sTaskID){
            id
        }
    }
`

export const PUBLICUPLOADFILESTASK = gql`
    mutation publicUploadFilesTask($taskID: ID!, $fileID: ID!){
        publicUploadFilesTask(taskID: $taskID, fileID: $fileID){
            id
            status
            name
        }
    }
`

export const DELIVERTASK = gql`
    mutation deliverTask($taskID: ID!){
        deliverTask(taskID: $taskID){
            content
        }
    }
`

export const CANCELTASKDELIVERY = gql`
    mutation cancelTaskDelivery($taskID: ID!){
        cancelTaskDelivery(taskID: $taskID){
            content
        }
    }
`