// StateFull Component
// import React, { Component } from 'react'
// export class Input extends Component {
//     render() {
//         return (
//             <div>
//                 <input
//                     // Menerima Method dengan event onCLick
//                     type='button' onClick={this.props.newName}
//                     value='Klik Untuk merubah'></input>
//                 <br />
//                 <label>Nama Baru:</label>
//                 {/* Menerima Method untuk merubah "name" melalui inputan  yang didapatkan dari event */}
//                 <input type='text' onBlur={(event) => this.props.ubahName(event.target.value)}></input>
//                 <br />
//                 <label>Umur Baru:</label>

//                 {/* Menerima Method untuk merubah "age" melalui inputan yang didapatakan dari event*/}
//                 <input type='text' onBlur={(event) => this.props.ubahAge(event.target.value)}></input>
//             </div>
//         )
//     }
// }

// export default Input





// Functional Component
import React from 'react'

const Input = (props) => {
    return (
        <div><input
            // Menerima Method dengan event onCLick
            type='button' onClick={props.newName}
            value='Klik Untuk merubah'></input>
            <br />
            <label>Nama baru:</label>
            {/* Menerima Method untuk merubah "name" melalui inputan  yang didapatkan dari event */}
            <input type='text' onBlur={(event) => props.ubahName(event.target.value)}></input>
            <br />
            <label>Umur baru:</label>
            {/* Menerima Method untuk merubah "age" melalui inputan  yang didapatkan dari event */}
            <input type='number' onBlur={(event) => props.ubahAge(event.target.value)}></input>
        </div>
    )
}

export default Input