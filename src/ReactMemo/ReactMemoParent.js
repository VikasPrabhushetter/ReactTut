import React, { useState, memo } from "react";
import Child from "./Child";

const ReactMemoParent = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Vikas")
    console.log("Parent component rendered!");
    return (
        <div>
            <Child name={name} />
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default ReactMemoParent
