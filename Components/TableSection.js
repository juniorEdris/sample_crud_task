import Link from 'next/link'
const TableSection = (props) => {
    return (
        <div className="flex py-3 justify-center ">
        <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-800 border-separate space-y-6 text-sm">
                <thead className="bg-gray-300 text-gray-800">
                <tr>
                    <th className="p-3">Name</th>
                    <th className="p-3 ">Email</th>
                    <th className="p-3 ">Phone</th>
                    <th className="p-3 ">Date of Birth</th>
                    <th className="p-3 ">Subjects</th>
                    <th className="p-3 ">Action</th>
                </tr>
                </thead>
                <tbody>
                
                {
                props.students?.map(student => (
                    <tr className="bg-gray-300" key={student.id}>
                    <td className="p-3">
                        {student.name}
                    </td>
                    <td className="p-3">
                        {student.email}
                    </td>
                    <td className="p-3">
                        {student.phone}
                    </td>
                    <td className="p-3">
                        {student.dob}
                    </td>
                    <td className="p-3 hover:text-red-500">
                            {student?.subjects ? <Link className='' href={`/subject/${student.subjects.id}`}>
                                <a >
                                    {student.subjects.name.toUpperCase()}
                                </a>
                            </Link> : 'none'}
                    </td>
                    <td className="p-3 text-center">
                            <a href="#" onClick={e => {
                                e.preventDefault()
                                props.delete(student.id)
                            }} className="text-sm text-red-700 hover:text-red-500 mr-2">
                            <i className="fas fa-trash-alt"></i>
                        </a>
                    </td>
                </tr>
                    ))
                }
                </tbody>
            </table>
            </div>
        </div>
        </div>

     );
}
 
export default TableSection;