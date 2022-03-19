// import React, { Component } from 'react'

// export class FreeCode1 extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             visibility: false
//         }
//         this.toggleVisibility = this.toggleVisibility.bind(this);
//     }
//     toggleVisibility() {
//         this.setState(state => {
//             if (state.visibility === true) {
//                 return { visibility: false };
//             } else {
//                 return { visibility: true };
//             }
//         });
//     }
//     render() {
//         if (this.state.visibility) {
//             return (
//                 <div>
//                     <button onClick={this.toggleVisibility}>Click Me</button>
//                     <h1>Now You See Me</h1>
//                 </div>
//             )
//         } else {
//             return (
//                 <div>
//                     <button onClick={this.toggleVisibility}>Click Me</button>
//                 </div>
//             )
//         }
//     }
// }

// export default FreeCode1

import React, { useState } from 'react'

const FreeCode1 = () => {
    const [state, setState] = useState({
        visibility: false
    })

    // const toggleVisibility = () => {
    //     setState(state => {
    //         if (state.visibility === true) {
    //             return { visibility: false }
    //         } else {
    //             return { visibility: true }
    //         }
    //     })
    // }
    // if (state.visibility) {

    const toggleVisibility = () => {
        setState({
            ...state,
            visibility: !state.visibility
        })
    }
    return (
        <div>
            <button onClick={toggleVisibility}>Click Me</button>
            <h1>{JSON.stringify(state.visibility)}</h1>
            {/* <span>{JSON.stringify(state.visibility)}</span> */}
        </div>
    )
    // } else {
    //     return (
    //         <div>
    //             <button onClick={toggleVisibility}>Click Me</button>
    //         </div>
    //     )
    //     }
}

export default FreeCode1