import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <h1>{state}</h1>
      <Child stateChange={setState} />
    </div>
  )
}

export default Parent