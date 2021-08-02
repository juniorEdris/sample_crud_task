import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'

const Subject = ({ result }) => {
    const router = useRouter()
    const pushBack =e => router.back()
    return (
        <div className=" py-3 w-10/12 m-auto">
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
                <script defer src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" integrity="sha384-haqrlim99xjfMxRP6EWtafs0sB1WKcMdynwZleuUSwJR0mDeRYbhtY+KPMr+JL6f" crossOrigin="anonymous"></script>
            </Head>
            <div className="py-3 ">
                <button type='button' onClick={pushBack} className='text-gray-600 hover:text-gray-400 '>
                    <i className="fa-2x fas fa-arrow-circle-left hover:cursor-pointer" ></i> Go Back
                </button>
            </div>
        <div className="w-full">
            <h1 className='capitalize text-4xl text-red-700 border-b-2 border-red-700 pl-2 pb-2'> <span>subject :</span> {result.name}</h1>
        </div>
            <div className="py-8 px-2">
            <ul className=''>
            {result?.students?.map(student => (
                <li className='capitalize text-xl mb-1' key={student.id}>{`${student.name}`}</li>
            ))} 
            </ul>
        </div> 
        </div>
     );
}
 
export default Subject;


export const getServerSideProps = async (context) => {
    const { params } = context
    const { id } = params
    const client = new ApolloClient({
        uri: 'http://localhost:8080/graphql',
        cache: new InMemoryCache()
      });
       const {data} = await client.query({
        query: gql`
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
    `,
        variables: {
          id
        }
       }).catch(err => {
          console.log(err.networkError.result.errors);
       })
    return {
        props:{
         result:data.subject
        }
    }
}