import React, { useState } from 'react';
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

const Parent = () => {
    const [NamVar, setNamVar] = useState("Umashree")
    const [WshAryVar, setWshAryVar] = useState(["Laptop", "Mobile", "Pulsor", "Train"])
    const [DetailVar, setDetailVar] = useState({ Name: "Vidya", Email: "vidya@gmail.com", Mobile: 7788994455 })

    return (
        <div style={{ backgroundColor: 'pink', padding: 10 }}>
            <h1>Parent Component</h1>
            <p>Name : {NamVar}</p>
            <hr></hr>
            <FirstChild NamVar={NamVar} WshAryVar={WshAryVar} setNamVar={setNamVar} />
            <hr></hr>
            <SecondChild NamVar={NamVar} DetailVar={DetailVar} />
        </div>
    )
}
export default Parent
