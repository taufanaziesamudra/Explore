import React, { Component } from 'react'
import Greeting03 from './Greeting03'

export class Application03 extends Component {
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
            persons: [
                {
                    name: 'Anne',
                    age: 24
                }
            ]
        })
    }
    render() {
        return (
            <div className='App'>
                <h1>Greeating app react</h1>
                <Greeting03 name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                    clickParagraph={this.changeHandlePerson} />
            </div>
        )
    }
}

export default Application03
