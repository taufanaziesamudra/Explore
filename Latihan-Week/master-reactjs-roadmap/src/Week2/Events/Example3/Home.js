import React, { useState } from 'react'
import Greeting from './Greeting'
import Information from './Information'

const Home = () => {
  const [state, setState] = useState({
    data: 'Hello Everybody',
    greeting: 'Selamat datang di React JS',
    isInformation: false
  })

  const changeText = () => {
    setState({
      ...state,
      data: 'Halo ReactJS'
    })
  }

  const showInformation = () => {
    setState({
      ...state,
      isInformation: !state.isInformation
    })
  }
  return (
    <div>
      <h3>{state.data}</h3>
      <Greeting greeting={state.greeting} changeText={changeText} />
      <br />
      <Information isInformation={state.isInformation} showInformation={showInformation} />
    </div>
  )
}

export default Home