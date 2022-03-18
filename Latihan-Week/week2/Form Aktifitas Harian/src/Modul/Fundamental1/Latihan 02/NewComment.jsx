import React, { Component } from 'react'

export class NewComment extends Component {
    state = {
        counter: 1
    }
    render() {
        return (
            <div>
                {this.state.counter}
            </div>
        )
    }
}

export default NewComment
