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
export const getSingleStudents = gql`
    query($id:String!){
        student(id:$id){
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
export const getStudentsBySub = gql`
    query($id:ID){
        subject(id:$id){
            id
            name
            students {
                id
                name
            }
        }
    }
`
export const deleteStudentByID = gql`
query($id:ID){
    deleteStudent(id:$id){
        id
        name
      }
}


# query{
#   deleteStudent(id:"6106f2d8bb52b84808e94901"){
#     id
#     name
#   }
# }
`

export const addStudent =gql`
    mutation($name:String!,$email:String!,$dob:String!,$phone:String!,$subId:String!){
            addStudent(name:$name,email:$email,dob:$dob,phone:$phone,subjectId:$subId) {
                id
                name
                email
                dob
                phone
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