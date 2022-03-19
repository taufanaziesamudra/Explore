// import React, { Component } from 'react'
// import GetInput from './GetInput'
// import RenderInput from './RenderInput'

// export class YourApp extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             inputValue: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange = (event) => {
//         this.setState({
//             inputValue: event.target.value
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <GetInput
//                     input={this.state.inputValue}
//                     handleChange={this.handleChange} />

//                 <RenderInput input={this.state.inputValue} />
//             </div>
//         )
//     }
// }

// export default YourApp


import React, { useState } from 'react'
import GetInput from './GetInput'
import RenderInput from './RenderInput'

const YourApp = () => {
    const [state, setState] = useState({
        inputValue: []
    })

    const handleChange = (event) => {
        setState({
            inputValue: event.target.value
        })
    }
    return (
        <div>
            <GetInput
                input={state.inputValue}
                handleChange={handleChange} />

            <RenderInput input={state.inputValue} />
        </div>
    )
}

export default YourApp