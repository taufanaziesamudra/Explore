// import React, { Component } from 'react'
// import YouTubeCompoent from '../StateLess/YouTubeComponent/YouTubeComponent'

// export class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <YouTubeCompoent
//                     time='00:01'
//                     title='Belajar Ngoding Lagi'
//                     desc='Aku belajar lagi' />
//                 <YouTubeCompoent
//                     time='00:01'
//                     title='Belajar Ngoding Lagi'
//                     desc='Aku belajar lagi' />
//                 <YouTubeCompoent
//                     time='00:01'
//                     title='Belajar Ngoding Lagi'
//                     desc='Aku belajar lagi' />
//                 <YouTubeCompoent
//                     time='00:01'
//                     title='Belajar Ngoding Lagi'
//                     desc='Aku belajar lagi' />
//                 <YouTubeCompoent />
//             </div>
//         )
//     }
// }

// export default Home


import React from 'react'
import YouTubeCompoent from '../StateLess/YouTubeComponent/YouTubeComponent'

const Home = () => {
    return (
        <div>
            <YouTubeCompoent
                time='00:02'
                title='Belalar lagi'
                desc='kurang kerjaan' />
            <YouTubeCompoent
                time='00:03'
                title='Belalar lagi'
                desc='kurang kerjaan' />
            <YouTubeCompoent
                time='00:03'
                title='Belalar lagi'
                desc='kurang kerjaan' />
            <YouTubeCompoent
                time='00:03'
                title='Belalar lagi'
                desc='kurang kerjaan' />
            <YouTubeCompoent />
        </div>
    )
}

export default Home