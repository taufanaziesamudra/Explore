import React, { useState } from 'react'

const Condtional = () => {
    const [state, setState] = useState({
        input: ''
    })


    const handleInput = (event) => {
        setState({
            input: event.target.value
        })
    }

    const inputStyle = {
        border: '1px solid black'
    }
    if (state.input.length > 15) {
        inputStyle.border = '3px solid red'
    }
  return (
    <div>
        <h2>Jangan terlalu banyak mengetik</h2>
            <input type='text'
            style={inputStyle}
            value={state.input}
            onChange={handleInput}></input>
            <h1>{state.input}</h1>
    </div>
  )
}

export default Condtional