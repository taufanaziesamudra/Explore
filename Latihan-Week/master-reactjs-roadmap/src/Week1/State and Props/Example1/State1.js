// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'

// export class State1 extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       name: "Taufan Ajie Samudro"
//     }
//   }
//   render() {
//     return (
//       <div>Namaku adalah : {this.state.name}</div>
//     )
//   }
// }

// export default State1


// Functional Component atau JSX
import React, { useState } from 'react'

const State1 = () => {
  const [state, setState] = useState({
    name: "Taufan AS"
  })
  return (
    <div>Namaku adalah: {state.name}</div>
  )
}

export default State1