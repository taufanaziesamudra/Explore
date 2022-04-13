import React from 'react'

const Result = ({ fiftyFifty }) => {
  return (
    <div> <h1 style={{ color: 'red' }}>
      {fiftyFifty ? "Kamu Menang" : "Kamu Kalah"}
    </h1>
    </div>
  )
}

export default Result