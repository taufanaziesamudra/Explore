import React from 'react'

const Greeting = (props) => {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <button onClick={props.changeText}>changeText</button>
    </div>
  )
}

export default Greeting