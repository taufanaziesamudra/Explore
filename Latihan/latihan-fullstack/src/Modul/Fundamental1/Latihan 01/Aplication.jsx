import React, { Component } from 'react'
import Greeting from './Greeting'

export class Aplication extends Component {
    state = {
        person: [
            { name: 'Taufan', age: 100 },
            { name: 'Komeng', age: 17 },
            { name: 'Adul', age: 19 },
        ]
    }
    render() {
        return (
            <div className='App'>
                {/* Melempar props */}
                {/* <h1>Greeting from React App</h1>
                <Greeting name='Taufan Ajie' age='19' />
                <Greeting name='Komeng' age='18' />
                <Greeting name='Bangkit' age='17' /> */}


                {/* Menerima State */}
                <Greeting name={this.state.person[0].name}
                    age={this.state.person[0].age}>Im Frontend Dev</Greeting>
                <Greeting name={this.state.person[1].name}
                    age={this.state.person[1].age}></Greeting>
                <Greeting name={this.state.person[2].name}
                    age={this.state.person[2].age}></Greeting>
            </div>
        )
    }
}

export default Aplication
