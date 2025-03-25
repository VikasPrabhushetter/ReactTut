import React, { useRef, useEffect } from "react";

function UseRefHook() {
    const userNameRef = useRef(null);
    const pwdRef = useRef(null);
    console.log("userNameRef :", userNameRef?.current)

    useEffect(() => {
        userNameRef.current.focus();
    }, []); // Focus the input field when the component mounts

    const ChangeColor = () => {
        userNameRef.current.style.backgroundColor = "orange";
        pwdRef.current.style.backgroundColor = "green";
        console.log(userNameRef.current.value)
    }
    console.log(userNameRef?.current?.value)

    return (
        <div className="m-10 brdr">
            {/* logic with scss */}
            {/* <input ref={userNameRef} type="text" placeholder="User Name" autoFocus className="m-10 bx" />
        <input ref={pwdRef} type="password" placeholder="Password" className="m-10 bx" />
        <button className="m-10 btn-bx">Login</button> */}
            {/* ----------------------------------------------------------------------------------------------- */}
            {/* Logic without scss */}
            <input ref={userNameRef} type="text" placeholder="User Name" className="m-10" />
            <input ref={pwdRef} type="password" placeholder="Password" className="m-10" />
            <button className="m-10" onClick={ChangeColor}>Login</button>
        </div>);
}
export default UseRefHook;