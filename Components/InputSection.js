const InputSection = (props) => {
    return (
        <div className="w-10/12 m-auto my-2 py-2 px-1">
            <div className="w-full lg:w-4/12 m-auto py-2 px-2 border border-gray-500 rounded">

            <div className="grid gap-y-2 grid-col-1 ">
                <div className=""><input className='w-full h-10 px-3 border rounded' type="text" id='name' onChange={props.handleChange} value={props.input.name} placeholder='Full name'/></div>
                <div className=""><input className='w-full h-10 px-3 border rounded' type="text" id='email' onChange={props.handleChange} value={props.input.email} placeholder='email'/></div>
                <div className=""><input className='w-full h-10 px-3 border rounded' type="text" id='mobile' onChange={props.handleChange} value={props.input.mobile} placeholder='Phone number'/></div>
                <div className=""><input className='w-full h-10 px-3 border rounded' type="date" id='dob' onChange={props.handleChange} value={props.input.dob}/></div>
                <div className="subjects flex flex-col items-start px-2">
                        <select className="w-full h-10 border rounded capitalize" name="" id="subject" onChange={props.handleChange} value={props.input.subject}>
                            <option value="">Select one</option>
                            {props.subjects?.map(subject =><option value={subject.id} key={subject.id}>{subject.name}</option>)}
                        </select>
                </div>
            </div>
            
                <button className='text-gray-800 hover:text-gray-100 bg-gray-300 hover:bg-gray-800 py-2 px-5 font-normal text-xl w-full rounded mt-2' type='button' onClick={props.insertStudent}>Insert</button>
                {props.error &&
                    <div className="text-center py-3 bg-red-300 rounded mt-2">
                        <small className='text-red-800 font-bold'>{props.error}</small>
                    </div>
                }
                {props.msg &&
                    <div className="text-center py-3 bg-green-300 rounded mt-2">
                        <small className='text-green-700 font-bold'>{props.msg}</small>
                    </div>
                }
            </div>
        </div>
     );
}
 
export default InputSection;