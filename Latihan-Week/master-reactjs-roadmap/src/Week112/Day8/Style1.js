import React, { Component } from 'react'

const styles = {
    color: 'purple',
    fontSize: 40,
    border: '2px solid purple',
}
export class Style1 extends Component {
    render() {
        return (
            <div style={styles}>Style1</div>
        )
    }
}

export default Style1