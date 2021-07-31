import {gql} from '@apollo/client'
export const getStudents = gql`
    query{
        students{
            id
            name
            email
            dob
            phone
            subjects{
                id
                name
            }
        }
    }
`


export const addStudent =(name,email,dob,phone,subId)=> gql`
    mutation{
            addStudent(name:${name},email:${email},dob:${dob},phone:${phone},subjectId:${subId}) {
                id
                name
                email
                dob
                phone
                subjectId
            } 
        }
`
export const getSubjects = gql`
    query{
        subjects{
        id
        name
        }
    }
`