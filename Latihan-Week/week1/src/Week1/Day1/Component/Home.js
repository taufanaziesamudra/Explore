// StateFull Component
// import React, { Component } from 'react'
// import HelloWorld from './HelloWorld'

// export class Home extends Component {
//     render() {
//         return (
//             <div>
//                 {/* Membuat props "nama" dan "belakang yang akan diterima HelloWorld" */}
//                 <HelloWorld nama="Taufan" belakang="Kamu" />
//                 <HelloWorld nama="Ajie" />
//                 <HelloWorld nama="Samudro" />
//                 <HelloWorld />
//             </div>
//         )
//     }
// }

// export default Home





// Functional Component
import React from 'react'
import HelloWorld from './HelloWorld'

const Home = () => {
    return (
        <div>
            {/* Membuat props "nama" dan "belakang yang akan diterima HelloWorld" */}
            <HelloWorld nama='Taufan' belakang='Ajie' />
            <HelloWorld nama='Komeng' belakang='Udin' />
            <HelloWorld nama='Bangkid' belakang='Widirato' />
        </div>
    )
}

export default Home