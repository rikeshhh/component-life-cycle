import React, { useEffect } from 'react'

const Counter1 = ({number}) => {
    useEffect(()=>{
        console.log("functional component updating")
        return ()=>{
console.log("functional componet : removed")
        }
    },[number])
  return (
    <div>
        {number}
    </div>
  )
}

export default Counter1