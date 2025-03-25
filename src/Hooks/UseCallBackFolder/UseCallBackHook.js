import React, { useState, useMemo, memo, useCallback } from "react";

const BtnComponent = memo(({ num2, handleBtnTwoClick }) => {
    console.log("Button Component Rendered")
    return (
        <>
            <h1>Second Number: {num2}</h1>
            <button type="button" onClick={handleBtnTwoClick}>Increment Num2</button>
        </>
    )
})

const UseCallBackHook = () => {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1)
    const handleBtnTwoClick = useCallback(() => setNum2(num2 + 1), [])
    console.log("Parent Component Rendered")
    return (
        <div>
            <h1>First Number: {num1}</h1>
            <button type="button" onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
            <BtnComponent num2={num2} handleBtnTwoClick={handleBtnTwoClick} />
        </div>
    );
}

export default UseCallBackHook

