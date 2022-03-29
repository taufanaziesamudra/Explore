// import React, { Component } from 'react'

// export class BoxClass extends Component {
//     state = {
//         sub: false,
//         like: 0,
//         dislike: 0
//     }

//     handleSub = () => {
//         this.setState({
//             sub: !this.state.sub
//         })
//     }

//     handleLike = () => {
//         // curretstate untuk mereplace
//         this.setState(currentState => ({
//             like: currentState.like + 1
//         }))
//     }


//     handleDislike = () => {
//         this.setState({
//             dislike: this.state.dislike + 1
//         })
//     }


//     handleTripple = () => {
//         this.handleLike()
//         this.handleLike()
//         this.handleLike()

//     }
//     render() {
//         return (
//             <div>
//                 <p>
//                     <button onClick={this.handleSub}>
//                         {this.state.sub ? 'Sub' : 'NotSub'}
//                     </button>
//                     <span>{JSON.stringify(this.state.sub)}</span>
//                 </p>

//                 <p>
//                     <button onClick={this.handleLike}>Like</button>
//                     <span>{this.state.like}</span>
//                 </p>

//                 <p>
//                     <button onClick={this.handleDislike}>Dislike</button>
//                     <span>{this.state.dislike}</span>
//                 </p>

//                 <p>
//                     <button onClick={this.handleTripple}>Tripple</button>
//                     <span>{this.state.like}</span>
//                 </p>
//             </div>
//         )
//     }
// }

// export default BoxClass


import React, { useState } from 'react'

const BoxClass = () => {
    // Menginisialisasi state
    const [state, setState] = useState({
        sub: false,
        like: 0,
        dislike: 0
    })

    const handleSub = () => {
        // Mereplace
        setState({
            ...state,
            sub: !state.sub
        })
    }

    const handleLike = () => {
        setState(currentState => ({
            ...state,
            like: currentState.like + 1
        }))
    }

    const handleDislike = () => {
        setState({
            ...state,
            dislike: state.dislike + 1
        })
    }

    const handleTripple = () => {
        handleLike()
        handleLike()
        handleLike()
    }
    return (
        <div>
            <p>
                <button onClick={handleSub}>SUB</button>
                <span>{JSON.stringify(state.sub)}</span>
            </p>

            <p>
                <button onClick={handleLike}>Like</button>
                <span>{state.like}</span>
            </p>

            <p>
                <button onClick={handleDislike}>Dislike</button>
                <span>{state.dislike}</span>
            </p>

            <p>
                <button onClick={handleTripple}>TripleLike</button>
                <span>{state.like}</span>
            </p>
        </div>
    )
}

export default BoxClass