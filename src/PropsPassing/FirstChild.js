import React, { useState } from 'react'
const FirstChild = ({ NamVar, WshAryVar, setNamVar }) => {
    const [count, setCount] = useState(12)
    return (
        <div style={{ backgroundColor: 'lightblue' }}>
            <h1>FirstChild Component</h1>
            <h2>My Name: {NamVar} </h2>
            <h2>My Wishlist</h2>
            <ul>
                {WshAryVar.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <p>CountValue: {count}</p>
            <input type="text" placeholder='Enter Name' value={NamVar} onChange={(e) => setNamVar(e.target.value)} ></input>
        </div>
    )
}
export default FirstChild