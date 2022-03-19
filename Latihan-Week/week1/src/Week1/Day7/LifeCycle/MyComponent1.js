// import React, { Component } from 'react'

// export class MyComponent1 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             message: '',
//         }
//         this.handleEnter = this.handleEnter.bind(this)
//         this.handleKeyPress = this.handleKeyPress.bind(this)
//     }

//     componentDidMount() {
//         document.addEventListener('keydown', this.handleKeyPress)
//     }

//     componentWillUnmount() {
//         document.removeEventListener('keydown', this.handleKeyPress)
//     }

//     handleEnter() {
//         this.setState((state) => ({
//             message: state.message + 'You pass enter'
//         }))
//     }

//     handleKeyPress(event) {
//         if (event.keyCode === 13) {
//             this.handleEnter()
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//             </div>
//         )
//     }
// }

// export default MyComponent1

import React, { useEffect, useState } from 'react'

const MyComponent1 = () => {
    const [state, setState] = useState({
        message: '',
    })

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)
    })

    useEffect(() => {
        document.removeEventListener('keydown', handleKeyPress)
    })

    const handleEnter = () => {
        setState((state) => ({
            message: state.message + "Kamu pas enter"
        }))
    }

    const handleKeyPress = (event) => {
        if (event.keyCode === 13) {
            handleEnter()
        }
    }
    return (
        <div>
            <h1>Aktifitas: {state.message}</h1>
        </div>
    )
}

export default MyComponent1