import React, { Component } from 'react'

export class Handling extends Component {
    subHandling = () => {
        alert('button is clicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.subHandling}>Submit</button>
            </div>
        )
    }
}

export default Handling
