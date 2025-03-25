import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)

    // Without dependency Array
    useEffect(() => { console.log("Runs on every render") })
    // With Empty dependency array
    useEffect(() => { console.log("Runs on only first render") }, [])
    // With dependency array having dependencies
    useEffect(() => { console.log("Runs on first render and also whenever dependencies are updated") }, [playerOneScore])

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-around", gap: "10px" }}>
                <div style={{ background: "blue", width: "100%", padding: "10px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div>First Player : {playerOneScore}</div>
                    <button type='button' onClick={() => setPlayerOneScore(playerOneScore + 1)}>Increment</button>
                </div>

                <div style={{ background: "pink", width: "100%", padding: "10px", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div>Second Player : {playerTwoScore}</div>
                    <button type='button' onClick={() => setPlayerTwoScore(playerTwoScore + 1)}>Increment</button>
                </div>
            </div>
        </>
    )
}
export default UseEffectHook
