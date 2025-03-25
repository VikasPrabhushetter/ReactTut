import React, { useState } from 'react'

const ArrayDisplay = () => {

    const [list, setList] = useState(["Mango", "Banana", "Strawberry", "Cherry", "Chikku"])

    return (
        <>
            <h2>ArrayDisplay</h2>
            <ol>
                {list.map((itm) => { return <li>{itm}</li> })}
            </ol>
        </>
    )
}

export default ArrayDisplay