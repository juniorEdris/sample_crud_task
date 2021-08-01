import Head from 'next/head'
import InputSection from './InputSection'
import TableSection from './TableSection'
import { useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { addStudent, getStudents, getSubjects,deleteStudentByID } from './gqlqueries';

export default function Home({students,subjects}) {
  const [input, setInput] = useState({
    name: "",
    dob: "",
    mobile: "",
    email: "",
    subject: ""
  });
  const [error, setError] = useState('');
  const handleChange = e => {
      setInput(
        {...input,[e.target.id] : e.target.value}
      )
  }

  const insertStudent = () => {
    setError('')
    if (input.name === '' || input.dob === '' || input.mobile === '' || input.email === '' || input.subject === '') {
      setError('Fill all the inputs')
    } else {
      try {
        const client = new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        cache: new InMemoryCache()
      });
       client.mutate({
        mutation: addStudent,
        variables: {
          name: input.name,
          email: input.email,
          dob: input.dob,
          phone: input.mobile,
          subId:input.subject
        },
        refetchQueries:[{query:getStudents}],
      })
        .then(res => {
        console.log('done',res);
        setInput(
          {
            name: '',
            dob: '',
            mobile: '',
            email: '',
            subject: ''
          }
        )
      }).catch (error=> {
        console.log(error);
      })
      } catch (error) {
        console.log(error.networkError.result.errors);  
      }
    }
  }
  const deleteStudent = async(id) => {
    try {
      const client = new ApolloClient({
      uri: 'http://localhost:8080/graphql',
      cache: new InMemoryCache()
    });
     await client.query({
      query: deleteStudentByID,
      variables: {
        id
       },
    })
    } catch (error) {
      console.log(error.networkError.result.errors);  
    }
  }
  return (
    <div className="py-3  ">
      <Head>
        <title>Gain Tech Task</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
        <script defer src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" integrity="sha384-haqrlim99xjfMxRP6EWtafs0sB1WKcMdynwZleuUSwJR0mDeRYbhtY+KPMr+JL6f" crossOrigin="anonymous"></script>
      </Head>
      <main>
        <h1 className='text-center font-semibold text-3xl border-b border-gray-600 py-1'>CRUD Operation</h1>
        <InputSection
          handleChange={handleChange}
          input={input}
          // selectSubject={selectSubject}
          insertStudent={insertStudent}
          error={error}
          subjects={subjects}
        />
        <TableSection students={students} delete={deleteStudent}/>
      </main>
    </div>
  )
}

export const getServerSideProps = async () => {
  const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
  });
  const students = await client.query({
    query: getStudents,
  });
  const subjects  = await client.query({
    query: getSubjects
  });
  return {
    props: {
      students: students.data.students,
      subjects: subjects.data.subjects
    }
  }
}