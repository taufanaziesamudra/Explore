import React, { useState } from 'react'
import Data from './Data'
import Input from './Input'

const Home = () => {
    const [state, setState] = useState({
        name: 'Taufan Ajie Samudro',
        age: 30
    })

    // Method untuk merubah "name" dan "age"
    const ubahName = () => {
        setState({
            ...state,
            name: 'Komeng', age: 20
        })
    }

    // Method untuk merubah "name" melalui inputan dimana menerima value
    const changeName = (newName) => {
        setState({
            ...state,
            name: newName
        })
    }

    // Method untuk merubah "age" melalui inputan dimana menerima value
    const changeAge = (newAge) => {
        setState({
            ...state,
            age: newAge
        })
    }
    return (
        <div>
            <h1>WELCOME REACTJS</h1>
            <Data name={state.name} age={state.age} />
            <Input ubahName={ubahName} changeName={changeName}
            changeAge={changeAge} />
        </div>
    )
}

export default Home
