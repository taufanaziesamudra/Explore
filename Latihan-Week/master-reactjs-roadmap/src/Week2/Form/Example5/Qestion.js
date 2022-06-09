import React, { useState } from 'react'

const Qestion = () => {
  const inputStyle = {
    width: 235,
    margin: 25
  }
  const [state, setState] = useState({
    userInput: '',
    randomIndex: ''
  })

  const handleInput = (event) => {
    setState({
      userInput: event.target.value
    })
  }

  // ! Pertanyaan Jika userinput akan dikalikan 20
  const ask = () => {
    if (state.userInput) {
      setState({
        randomIndex: Math.floor(Math.random() * 20),
        // TODO Mengembalikan userInput menjadi kosong
        userInput: ''
      })
    }
  }

  const possibleAnsewrs = [
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'Yes, definitely',
    'You may rely on it',
    'As I see it, yes',
    'Outlook good',
    'Yes',
    'Signs point to yes',
    'Reply hazy try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    "Don't count on it",
    'My reply is no',
    'My sources say no',
    'Most likely',
    'Outlook not so good',
    'Very doubtful'
  ]
  const answer = possibleAnsewrs[state.randomIndex]
  return (
    <div>
      <input type='text'
        value={state.userInput}
        onChange={handleInput}
        style={inputStyle}></input>

      <br />
      <button onClick={ask}>Jawaban</button>
      <br />
      <h3>Jawab: {answer}</h3>
    </div>
  )
}

export default Qestion