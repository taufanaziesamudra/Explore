import React from 'react'

const Child = ({ stateChange, ...rest }) => {
  return (
    <div>
      <button onClick={() => stateChange('Halo')}>Klik</button>
    </div>
  )
}

export default Child