import React, { Component } from 'react'
import Greeting04 from './Greeting04'
import InputName from './InputName'
import InputAge from './InputAge'

export class Aplication04 extends Component {
    state = {
        persons: [
            {
                name: 'Taufan',
                age: 19
            }
        ]
    }

    changeHandlePerson = () => {
        this.setState({
            person:
            {
                name: 'Anne',
                age: 24
            }

        })
    }

    changeNameHandler = (event) => {
        this.setState({
            persons: [
                { name: event.target.value, age: this.state.persons[0].age }
            ]
        })
    }

    changeAgeHandler = (event) => {
        this.setState({
            persons: [
                { name: this.state.persons[0].name, age: event.target.value }
            ]
        })
    }
    render() {
        return (
            <div className='=App'>
                <h1>Greeting from React</h1>
                <InputName name={this.state.persons[0].name}
                    changeName={this.changeNameHandler} />

                <InputAge age={this.state.persons[0].age}
                    changeAge={this.changeAgeHandler} />

                <Greeting04 name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    clickParagraph={this.changeHandlePerson} />
            </div>
        )
    }
}

export default Aplication04
