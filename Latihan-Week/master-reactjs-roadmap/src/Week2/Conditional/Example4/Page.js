// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'
// import WarningBanner from './WarningBanner'

// class Page extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             showWarnig: true
//         }
//         this.handleToggleClick = this.handleToggleClick.bind(this)
//     }

//     handleToggleClick() {
//         this.setState(state => ({
//             showWarnig: !state.showWarnig
//         }))
//     }
//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarnig} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarnig ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         )
//     }
// }

// export default Page


// Functional Component atau JSX
import React, { useState } from 'react'
import WarningBanner from './WarningBanner'

const Page = () => {
    // Initialisasi state
    const [state, setState] = useState({
        showWarning: true
    })

    const handleToggleClick = () => {
        setState({
            showWarning: !state.showWarning
        })
    }
    return (
        <div>
            {/* Mengirimkan props state  yang akan diterim oleh warningbanner */}
            <WarningBanner warn={state.showWarning} />
            <button onClick={handleToggleClick} >
                {state.showWarning ? 'Hide' : 'Show'}
            </button>
        </div >
    )
}

export default Page