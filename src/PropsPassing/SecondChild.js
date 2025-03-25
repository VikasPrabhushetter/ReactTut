import React from 'react'
const SecondChild = (props) => {
    const { NamVar, DetailVar } = props
    return (
        <div style={{ backgroundColor: 'orange' }}>
            <h1>SecondChild Component</h1>
            <h2>My Name: {NamVar} </h2>
            <div>
                <h2>My Details</h2>
                <p>Name:{DetailVar.Name} </p>
                <p>Email:{DetailVar.Email} </p>
                <p>Mobile:{DetailVar.Mobile} </p>
            </div>
        </div>
    )
}
export default SecondChild