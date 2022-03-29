// import React, { Component } from 'react'
// import Results from './Results'

// export class GameOfChange extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             counter: 1
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 counter: prevState.counter + 1
//             }
//         })
//     }
//     render() {
//         const expression = Math.random() >= 0.5 ? true : false
//         return (
//             <div>
//                 <button onClick={this.handleClick}>Play Again</button>
//                 <Results fiftyFifty={expression} />
//                 <p>{'Turn: ' + this.state.counter}</p>
//             </div>
//         )
//     }
// }

// export default GameOfChange

import React, { useState } from 'react'
import Results from './Results'

const GameOfChange = () => {
    const [state, setState] = useState({
        counter: 1
    })

    const handleClick = () => {
        setState(prevState => {
            return {
                ...state,
                counter: prevState.counter + 1
            }
        })
    }
    const expression = Math.random() >= 0.5 ? true : false
    return (
        <div>
            <button onClick={handleClick}>Play Again</button>
            <Results fiftyFifty={expression} />
            <p>{'Turn: ' + state.counter}</p>
        </div>
    )
}

export default GameOfChange