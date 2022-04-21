import React, { useState } from 'react'

const Conditional = () => {
  const [state, setState] = useState({
    userAge: '',
    input: ''
  })

  const handleChange = (event) => {
    setState({
      input: event.target.value,
      userAge: ''
    })
  }

  const handleSubmit = () => {
    setState(currentState => ({
      userAge: currentState.input
    }))
  }

  const inputStyle = {
    width: 235,
    margin: 5
  }

  const buttonOne = <button onClick={handleSubmit}>Submit</button>
  const buttonTwo = <button>Umur anda Sudah Cukup</button>
  const buttonThree = <button>Umur Belum Cukup</button>

  return (
    <div>
      <h2>Masukan umurmu?</h2>
      <input style={inputStyle}
        type='number'
        value={state.input}
        onChange={handleChange}></input>
      <br />
      {state.userAge === '' ? buttonOne : state.userAge >= 18 ?
        buttonTwo : buttonThree}
    </div>
  )
}

export default Conditional