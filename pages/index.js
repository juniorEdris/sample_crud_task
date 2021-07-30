import Head from 'next/head'
import InputSection from './InputSection'
import TableSection from './TableSection'
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState({
    name: '',
    dob: '',
    mobile: '',
    email: '',
    subjects: []
  });
  const [students, setStudent] = useState([
    {
    name: 'John Doe',
    dob: '1997-07-26',
    mobile: '01846029691',
    email: 'mdraghib17@gmail.com',
    subjects: ['bangla','english']
    }
  ]);
  const [error, setError] = useState('');
  const handleChange = e => {
    if (e.target.id === 'subjects') {
      setInput({...input,subjects:[...input.subjects,e.target.value]})
    } else {
      setInput(
        {...input,[e.target.id] : e.target.value}
      )
    }
  }
  const selectSubject = (e, sub) => {
    e.preventDefault()
    let exist
    if (input.subjects.includes(sub)) {
      exist = true
      const result = input.subjects.filter(subjects=> subjects !== sub)
      setInput({...input,subjects:result})
    }
    if (!exist) {
      setInput({...input,subjects:[...input.subjects,sub]})
    }
  }
  const insertStudent = () => {
    setError('')
    // e.preventDefault()
    if (input.name === '' || input.dob === '' || input.mobile === '' || input.email === '' || !(input.subjects.length > 0)) {
      setError('Fill all the inputs')
    } else {
      setStudent([...students, input])
      setInput(
        {
          name: '',
          dob: '',
          mobile: '',
          email: '',
          subjects: []
        }
      )
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
          selectSubject={selectSubject}
          insertStudent={insertStudent}
          error={error}
        />
        <TableSection students={students}/>
      </main>
    </div>
  )
}
