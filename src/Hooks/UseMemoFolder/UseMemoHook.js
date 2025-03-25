import React, { useState, useMemo } from "react";
const UseMemoHook = () => {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1)

    const ExpensiveFunction = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 5000000000; i++) {
            num = num + 1
        }
        console.log("done")
        return num
    };
    const computedValue = useMemo(() => ExpensiveFunction(num1), [num1]);
    // const computedValue = ExpensiveFunction(num1)
    return (
        <div>
            <h1>First Number: {num1}</h1>
            <button type="button" onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
            <h1>Second Number: {num2}</h1>
            <button type="button" onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
            <h2>Computed Value: {computedValue}</h2>
        </div>
    );
}

export default UseMemoHook
