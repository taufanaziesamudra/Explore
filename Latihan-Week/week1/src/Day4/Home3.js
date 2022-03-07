import React, { Component } from 'react'
import Greeting from './Greeting'

export class Home3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'Halo World',
            greeting: 'Selamat datang di React JS',
            isInformatiaon: false,
            person: {
                name: 'Taufan Ajie Samduro'
            }
        }
    }

    changeText = () => {
        this.setState({
            data: 'Selamat Datang'
        })
    }
    render() {
        const { data, isInformatiaon, person, greeting } = this.state
        return (
            <div>
                <h1>State diclass Component: {this.state.data}</h1>
                <hr />
                <Greeting kirim={this.state.greeting} changeText={this.changeText} />
            </div>
        )
    }
}

export default Home3