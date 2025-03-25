import React, { memo } from "react";

const Child = ({ name }) => {
    console.log("Child component rendered!");
    return <h3>Hello, {name}!</h3>;
};

export default memo(Child)