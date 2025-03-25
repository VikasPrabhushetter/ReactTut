// import React, { useState } from 'react'

// const ListCrud = () => {
//     const [EmpNamAryVar, setEmpNamAryVar] = useState(["Uma", "Vikas", "Sujay"])
//     const [NamVar, setNamVar] = useState("")

//     const AddFnc = () => {
//         setEmpNamAryVar([...EmpNamAryVar, NamVar])
//         setNamVar("")
//     }

//     return (
//         <>
//             <h2>Employee Form</h2>
//             <input type="text" placeholder='Enter Name' value={NamVar} onChange={e => setNamVar(e.target.value)}></input>
//             <button type='button' onClick={AddFnc}>Add Name</button>
//             <h2>Employee List</h2>
//             <ol>
//                 {EmpNamAryVar.map((item) => <li>{item}</li>)}
//             </ol>
//         </>
//     )
// }

// export default ListCrud

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListCrud = () => {
    const [EmpNamAryVar, setEmpNamAryVar] = useState([]);
    const [NamVar, setNamVar] = useState("");
    const [EditIdxVar, setEditIdxVar] = useState(-1)

    const AddFnc = () => {
        let EnteredName = NamVar.trim()
        if (EnteredName === "") {
            alert("Name cannot be empty")
        }
        else if (EnteredName.length < 5) {
            alert("Name should be minimum 5 characters long")
        }
        else {
            setEmpNamAryVar([...EmpNamAryVar, EnteredName]);
            setNamVar("");
        }
    };

    const UpdateFnc = () => {
        EmpNamAryVar[EditIdxVar] = NamVar
        setEmpNamAryVar([...EmpNamAryVar])
        setNamVar("");
    };

    const EditFnc = (index) => {
        setEditIdxVar(index)
        setNamVar(EmpNamAryVar[index])
    };

    const DeleteFnc = (index) => {
        if (window.confirm("Are you sure that you wanna delete this item ???")) {
            EmpNamAryVar.splice(index, 1)
            setEmpNamAryVar([...EmpNamAryVar])
        }
    };

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-lg">
                <h2 className="mb-4 border-bottom pb-2">Employee Form</h2>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Enter Name"
                        value={NamVar}
                        onChange={e => setNamVar(e.target.value)}
                    />
                    <div className='d-flex justify-content-center'>
                        <button className="btn btn-primary me-2 w-25" type='button' onClick={AddFnc}>Add</button>
                        <button className="btn btn-success w-25" type='button' onClick={UpdateFnc}>Update</button>
                    </div>
                </div>
                <h2 className="mt-4">Employee List</h2>
                <ol className="list-group pt-4">
                    {EmpNamAryVar.length <= 0 ? <div className="text-center">No records found</div> :
                        <div>
                            {EmpNamAryVar.map((item, index) => (
                                <div key={index} className='d-flex align-items-center mb-2'>
                                    <li className="list-group-item flex-grow-1">{item}</li>
                                    <button className="btn btn-warning ms-2" type='button' onClick={() => EditFnc(index)}>Edit</button>
                                    <button className="btn btn-danger ms-2" type='button' onClick={() => DeleteFnc(index)}>Delete</button>
                                </div>
                            ))}
                        </div>}
                </ol>
            </div>
        </div>
    );
};

export default ListCrud;