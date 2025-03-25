// import React from 'react'

// const NormalVariable = () => {
//   var count = 10

//   const incrementCount = () => {
//     count = count + 1
//     console.log("Count", count)
//   }

//   return (
//     <>
//       <div>Count : {count}</div>
//       <button onClick={incrementCount}>Increment</button>
//     </>
//   )
// }

// export default NormalVariable

import React, { useState } from 'react'

const StateVariable = () => {
  const [count, setCount] = useState(10)
  const [score, setScore] = useState(20)

  const incrementCount = () => {
    setCount(prev => prev + 1)
  }

  const incrementScore = () => {
    setScore(pv => pv + 1)
  }

  return (
    <>
      <div>Count : {count}</div>
      <button onClick={incrementCount}>Inc Count</button>
      <div>Score: {score}</div>
      <button onClick={incrementScore}>Inc Score</button>
    </>
  )
}

export default StateVariable