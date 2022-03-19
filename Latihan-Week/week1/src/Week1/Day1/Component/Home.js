// import React, { Component } from 'react'
// import HelloWorld from './HelloWorld'

// export class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <HelloWorld nama="Taufan" belakang="Kamu" />
//                 <HelloWorld nama="Ajie" />
//                 <HelloWorld nama="Samudro" />
//                 <HelloWorld />
//             </div>
//         )
//     }
// }

// export default Home

import React from 'react'
import HelloWorld from './HelloWorld'

const Home = () => {
    return (
        <div>
            <HelloWorld nama='Taufan' belakang='Ajie' />
            <HelloWorld nama='Komeng' belakang='Udin' />
            <HelloWorld nama='Bangkid' belakang='Widirato' />
        </div>
    )
}

export default Home