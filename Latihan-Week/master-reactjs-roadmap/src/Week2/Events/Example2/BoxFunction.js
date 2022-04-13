// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react'

// class BoxFunction extends Component {
//   // Menginisialisasi state
//   state = {
//     sub: false,
//     like: 0,
//     dislike: 0
//   }

//   handleSub = () => {
//     this.setState({
//       sub: !this.state.sub
//     })
//   }

//   handleLike = () => {
//     // Membuat CurrentStatate agar tidak menggabung value
//     this.setState(currentstate => ({
//       like: currentstate.like + 1
//     }))
//   }

//   handleDislike = () => {
//     this.setState({
//       dislike: this.state.dislike + 1
//     })
//   }

//   handleTripple = () => {
//     this.handleLike()
//     this.handleLike()
//     this.handleLike()
//   }

//   render() {
//     return (
//       <div>
//         <p>
//           <button onClick={this.handleSub}>{this.state.sub ? 'Subricpe' : 'Not Subricpe'}</button>
//           <span>{JSON.stringify(this.state.sub)}</span>
//         </p>

//         <p>
//           <button onClick={this.handleLike}>Like</button>
//           <span>{this.state.like}</span>
//         </p>

//         <p>
//           <button onClick={this.handleDislike}>Dislike</button>
//           <span>{this.state.dislike}</span>
//         </p>

//         <p>
//           <button onClick={this.handleTripple}>TrippleLike</button>
//           <span>{this.state.like}</span>
//         </p>
//       </div>
//     )
//   }
// }

// export default BoxFunction


import React, { useState } from 'react'

const BoxFunction = () => {
  const [state, setState] = useState({
    sub: false,
    like: 0,
    dislike: 0
  })

  const handleSub = () => {
    // Memakai Updater Function karena berjalan secara asycronuis
    setState({
      ...state,
      sub: !state.sub
    })
  }

  const handleLike = () => {
    // Membuat CurrentStatate agar tidak mereplace
    // Memakai Updater Function karena berjalan secara asycronuisu
    setState(currentState => ({
      ...state,
      like: currentState.like + 1
    }))
  }

  const handleDislike = () => {
    // Memakai Updater Function karena berjalan secara asycronuisu
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
        <button onClick={handleSub}>Subricpe</button>
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
        <button onClick={handleTripple}>Tripple</button>
        <span>{state.like}</span>
      </p>
    </div>
  )
}

export default BoxFunction