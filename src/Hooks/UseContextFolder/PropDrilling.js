import React, { useState } from 'react'

const PropDrilling = () => {
    const [name, setName] = useState("Vikas")
    return (
        <div style={{ background: "red", padding: "10px" }}>
            <h1>Component 1</h1>
            <p>Name: {name}</p>
            <Component2 name={name} />
        </div>
    )
}

export default PropDrilling

const Component2 = ({ name }) => {
    return (
        <div style={{ background: "green", padding: "10px" }}>
            <h1>Component 2</h1>
            <Component3 name={name} />
        </div >
    )
}

const Component3 = ({ name }) => {
    return (
        <div style={{ background: "lightblue", padding: "10px" }}>
            <h1>Component 3</h1>
            <Component4 name={name} />
        </div>
    )
}

const Component4 = ({ name }) => {
    return (
        <div style={{ background: "pink", padding: "10px" }}>
            <h1>Component 4</h1>
            <Component5 name={name} />
        </div>
    )
}

const Component5 = ({ name }) => {
    return (
        <div style={{ background: "white", padding: "10px" }}>
            <h1>Component 5</h1>
            <p>Name: {name}</p>
        </div>
    )
}