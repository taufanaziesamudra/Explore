import React from 'react'

const Information = ({ isInformation, showInformation }) => {
  return (
    <div>
      <button onClick={showInformation}>Show</button>
      {JSON.stringify(isInformation)}
      {
        isInformation ? <h2>Today Holiday</h2> : null
      }
    </div>
  )
}

export default Information