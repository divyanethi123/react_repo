import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[count,setCount]=useState(0)

  return (
    <div>Parent
    <Child count = {count} name = {setCount}></Child>
    
    </div>
  )
}

export default Parent