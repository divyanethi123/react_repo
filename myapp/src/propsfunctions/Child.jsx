import React from 'react'

const Child = (props) => {
  return (
    <div>Child

        <h1>count value : {props.count}</h1>
        <button onClick={()=>props.name(props.count+1)}>Increment</button>
    </div>
  )
}

export default Child