import Head from 'next/head'
const TableSection = (props) => {
    return (
        <div className="flex py-3 justify-center ">
        <Head>
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"></link>
        <script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
        </Head>
        <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
            <table className="table text-gray-800 border-separate space-y-6 text-sm">
                <thead className="bg-gray-200 text-gray-800">
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
                <tr className="bg-gray-200">
                    <td className="p-3">
                        John Doe
                    </td>
                    <td className="p-3">
                        johndoe@mail.com
                    </td>
                    <td className="p-3">
                        000-222-111
                    </td>
                    <td className="p-3">
                        26-07-1997
                    </td>
                    <td className="p-3 ">
                        Bangla,English
                    </td>
                    <td className="p-3 text-center">
                        <a href="#" className="text-sm text-gray-800 hover:text-gray-400 mr-2">
                            <i className="fas fa-trash-alt"></i>
                        </a>
                    </td>
                </tr>
                {
                props.students?.map(student => (
                        <tr className="bg-gray-200">
                    <td className="p-3">
                        {student.name}
                    </td>
                    <td className="p-3">
                        {student.email}
                    </td>
                    <td className="p-3">
                        {student.mobile}
                    </td>
                    <td className="p-3">
                        {student.dob}
                    </td>
                    <td className="p-3 ">
                            {student.subjects.join(',').toUpperCase()}
                    </td>
                    <td className="p-3 text-center">
                        <a href="#" className="text-sm text-gray-800 hover:text-gray-400 mr-2">
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