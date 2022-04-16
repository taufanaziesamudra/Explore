import React, { useState } from 'react'

const Input = () => {
    const [state, setState] = useState({
        input: ''
    })

    const handleInput = (event) => {
        setState({
            ...state,
            input: event.target.value
        })
    }
  return (
    <div>
        <input type='text'onChange={handleInput}></input>
        <h1>{state.input}</h1>
    </div>
  )
}

export default Input