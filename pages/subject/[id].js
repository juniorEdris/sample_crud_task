import { ApolloClient, InMemoryCache } from '@apollo/client';
import { getStudentsBySub } from '../gqlqueries';

const Subject = ({result}) => {
    return (
        <div className="flex py-3 justify-center ">
        <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-800 border-separate space-y-6 text-sm">
                <thead className="bg-gray-300 text-gray-800">
                <tr>
                    <th className="p-3">Subject</th>
                    <th className="p-3 ">Students</th>
                </tr>
                </thead>
                <tbody>
                
                {/* {
                props.students?.map(student => ( */}
                    <tr className="bg-gray-300" >
                    <td className="p-3 capitalize">
                        {result.name}
                    </td>
                    <td className="p-3 capitalize">
                     {result.students?.map(student => (
                         <span key={student.id}>{`${student.name},`}</span>
                        ))}
                    </td>
                </tr>
                    {/* ))
                } */}
                </tbody>
            </table>
            </div>
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
        query: getStudentsBySub,
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