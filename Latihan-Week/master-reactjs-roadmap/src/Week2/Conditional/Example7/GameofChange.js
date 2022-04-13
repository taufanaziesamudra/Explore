import React, { useState } from 'react'
import Result from './Result'

const GameofChange = () => {
  const [state, setState] = useState({
    counter: 1
  })

  const handleClick = () => {
    setState(currentState => {
      return {
        ...state,
        counter: currentState.counter + 1
      }
    })
  }
  const expression = Math.random() >= 0.5 ? true : false
  return (
    <div>
      <button onClick={handleClick}>Play Again</button>
      <Result fiftyFifty={expression} />
      <h3>{'Taruhan: ' + state.counter}</h3>
    </div>
  )
}

export default GameofChange