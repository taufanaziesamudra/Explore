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

    const stype = {
        color: 'green'
    }
    if (state.input.length > 10) {
        stype.color = 'black'
    }
    return (
        <div>
            <h2>Jangan terlalu banyak mengetik</h2>
            <input type='text'
                style={inputStyle}
                value={state.input}
                onChange={handleInput}></input>
            <h2 style={stype}>{state.input}</h2>
        </div>
    )
}

export default Condtional