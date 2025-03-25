import React, { useState } from 'react'

const CounterApp = () => {
    const [count, setCount] = useState(0)
    const setCountFunc = (num) => {
        if ((num === 1 && (count >= 0 && count < 5)) || (num === -1 && (count > 0 && count <= 5))) setCount(count + num)
    }
    return (
        <div>
            <div>
                <h1>Count:{count}</h1>
                <button onClick={() => setCountFunc(+1)}>Increment</button>
                <button onClick={() => setCountFunc(-1)}>Decrement</button>
            </div>
        </div>
    )
}
export default CounterApp