import React, { useState } from 'react'
import Operan from './Operan'

const StateOperan = () => {
  const [state, setState] = useState({
    makanan: 'Bakso'
  })

  const handleChange = (new_makanan) => {
    setState({
      makanan: new_makanan
    })
  }
  return (
    <div>
      <h1>{state.makanan}</h1>
      <button onClick={() => handleChange('Pangsit')}>Ganti Makanan</button>
      <Operan makanan={state.makanan} handleChange={handleChange} />
    </div>
  )
}

export default StateOperan