import React, { useState } from 'react'

const FreeCode = () => {
    const [state, setState] = useState({
        count: 0
    })

    const reset = () => {
        setState({
            count: 0
        })
    }

    const increment = () => {
        setState({
            ...state,
            count: state.count + 1
        })
    }

    const decrement = () => {
        if (state.count > 0) {
            setState({
                ...state,
                count: state.count - 1
            })
        }
    }
    return (
        <div>
            <button onClick={increment}>Tambah</button>
            <button onClick={decrement}>Kurang</button>
            <button onClick={reset}>Reset</button>
            <br/>
            <h1>{state.count}</h1>
        </div>
    )
}

export default FreeCode
