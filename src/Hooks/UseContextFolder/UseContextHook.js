import React, { useState, createContext, useContext } from 'react'
const stateContext = createContext()
const UseContextHook = () => {

    const [name, setName] = useState("Vikas")
    const [count, setCount] = useState(1)

    return (
        <stateContext.Provider value={{ name, count, setCount }}>
            <div style={{ background: "red", padding: "10px" }}>
                <h1>Component 1</h1>
                <p>Name: {name}</p>
                <p>Count: {count}</p>
                <Component2 />
            </div>
        </stateContext.Provider>
    )
}

export default UseContextHook

const Component2 = () => {
    return (
        <div style={{ background: "green", padding: "10px" }}>
            <h1>Component 2</h1>
            <Component3 />
        </div >
    )
}

const Component3 = () => {
    const { count } = useContext(stateContext)
    return (
        <div style={{ background: "lightblue", padding: "10px" }}>
            <h1>Component 3</h1>
            <p>Count: {count}</p>
            <Component4 />
        </div>
    )
}

const Component4 = () => {
    const { setCount } = useContext(stateContext)
    return (
        <div style={{ background: "pink", padding: "10px" }}>
            <h1>Component 4</h1>
            <button onClick={() => setCount(pre => pre + 1)}>Inc Count</button>
            <Component5 />
        </div>
    )
}

const Component5 = () => {
    const { name } = useContext(stateContext)
    return (
        <div style={{ background: "white", padding: "10px" }}>
            <h1>Component 5</h1>
            <p>Name: {name}</p>
        </div>
    )
}