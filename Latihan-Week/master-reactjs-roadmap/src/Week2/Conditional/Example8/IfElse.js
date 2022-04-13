import React, { useState } from 'react'

const IfElse = () => {
  const [state, setState] = useState({
    display: true
  })

  const handleToggle = () => {
    setState((state) => ({
      ...state,
      display: !state.display
    }))
  }

  if (state.display) {
    return (
      <div>
        <button onClick={handleToggle}>Toggle Aktif</button>
        <h1 style={{ color: 'green' }}>Display!</h1>
      </div>
    )
  } else {
    return (
      <div>
        <button onClick={handleToggle}>Toggle tidak Aktif</button>
      </div>
    )
  }
}

export default IfElse