// // StateFull Component // StateFull Component atau Class Component
// import React, { Component } from 'react';
// import './YouTube.css';
// export class YouTube extends Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <div className='youtube-wrapper'>
//                 <div className='img-thumb'>
//                     <img src="https://i.ytimg.com/vi/EbdwcqZAkN0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDDULNq365sJdQJk189nrjDS3YoAQ" />
//                     <p className='time'>{this.props.time}</p>
//                 </div>
//                 <p className='title'>{this.props.title}</p>
//                 <p className='desc'>{this.props.desc}</p>
//             </div>
//         )
//     }
// }
// // Untuk mengisi secara default
// YouTube.defaultProps = {
//     time: '00:00',
//     title: 'Title Here',
//     desc: 'Ngangur'
// }

// export default YouTube


// Functional Component atau JSX
import React from 'react'
import './YouTube.css'
const YouTube = ({ time, title, desc }) => {
    return (
        <div className='youtube-wrapper'>
            <div className='img-thumb'>
                <img src="https://i.ytimg.com/vi/EbdwcqZAkN0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDDULNq365sJdQJk189nrjDS3YoAQ" />
                <p className='time'>{time}</p>
            </div>
            <p className='title'>{title}</p>
            <p className='desc'>{desc}</p>
        </div>
    )
}
YouTube.defaultProps = {
    time: '00:00',
    title: "Title Here",
    desc: 'Ayo'
}

export default YouTube