import React, { useState } from 'react'

const InpuBinding = () => {
    const [NamVar, setNamVar] = useState("")
    const [EmlVar, setEmlVar] = useState("")
    const [MblVar, setMblVar] = useState("")

    console.log({ NamVar, EmlVar, MblVar })
    return (
        <>

            <div>Name:</div>
            <input type="text" placeholder='Enter Name' value={NamVar} onChange={(e) => setNamVar(e.target.value)}></input>
            <div>Email:</div>
            <input type="email" placeholder='Enter Email' value={EmlVar} onChange={(e) => setEmlVar(e.target.value)}></input>
            <div>Mobile:</div>
            <input type="text" placeholder='Enter Mobile' value={MblVar} onChange={(e) => setMblVar(e.target.value)}></input>

        </>

    )
}

export default InpuBinding


// Same code but handling all data in one single object

// import React, { useState } from 'react'

// const InpuBinding = () => {
//     const [DtlVar, setDtlVar] = useState({ Name: "", Email: "", Mobile: "" })
//     console.log(DtlVar)

//     return (
//         <>
//             <div>Name:</div>
//             <input type="text" placeholder='Enter Name' value={DtlVar.Name} onChange={(e) => setDtlVar({ ...DtlVar, Name: e.target.value })}></input>
//             <div>Email:</div>
//             <input type="email" placeholder='Enter Email' value={DtlVar.Email} onChange={(e) => setDtlVar({ ...DtlVar, Email: e.target.value })}></input>
//             <div>Mobile:</div>
//             <input type="text" placeholder='Enter Mobile' value={DtlVar.Mobile} onChange={(e) => setDtlVar({ ...DtlVar, Mobile: e.target.value })}></input>

//         </>

//     )
// }

// export default InpuBinding