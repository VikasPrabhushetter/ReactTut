import React, { useState } from 'react'

function TwoWayInputBinding() {
    const [name, setName] = useState("")
    return (
        <div>
            <input type='text' placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)}></input>
            <p>My name is {name}</p>
        </div>
    )
}

export default TwoWayInputBinding