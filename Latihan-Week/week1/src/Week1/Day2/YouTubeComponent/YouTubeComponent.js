// StateFull Component
// import React, { Component } from 'react'
// import './YouTubeComponent.css'
// export class YouTubeComponent extends Component {
//     render() {
//         return (
//             <div className='youtube-wrapper'>
//                 <div className='img-thumb'>
//                     <img src="https://i.ytimg.com/vi/EbdwcqZAkN0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDDULNq365sJdQJk189nrjDS3YoAQ" />
//                     {/* Menerima props "time" dari Home */}
//                     <p className='time'>{this.props.time}</p>
//                 </div>
//                 {/* Menerima props "title" dari Home */}
//                 <p className='title'>{this.props.title}</p>

//                 {/* Menerima props "desc" dari Home */}
//                 <p className='desc'>{this.props.desc}</p>
//             </div>
//         )
//     }
// }
// // Untuk mengisi YoutubeComponent secara default dimana menerima props "time", "title" dan "desc"
// YouTubeComponent.defaultProps = {
//     time: "00:00",
//     title: "Title Here",
//     desc: "Default"
// }

// export default YouTubeComponent





// Functional Component
import React from 'react'
import './YouTubeComponent.css'
// Menerima data dari Home berupa time, title dan desc yang akan diterima oleh props
const YouTubeComponent = (props) => {
    return (
        <div className='youtube-wrapper'>
            <div className='img-thumb'>
                <img src="https://i.ytimg.com/vi/EbdwcqZAkN0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDDULNq365sJdQJk189nrjDS3YoAQ" />
                {/* Menerima props "time" dari Home */}
                <p className='time'>{props.time}</p>
            </div>
            {/* Menerima props "title" dari Home */}
            <p className='title'>{props.title}</p>

            {/* Menerima props "desc" dari Home */}
            <p className='desc'>{props.desc}</p>
        </div>
    )
}
// Untuk mengisi YoutubeComponent secara default dimana menerima props "time", "title" dan "desc"
YouTubeComponent.defaultProps = {
    time: "00:00",
    title: "Title Here",
    desc: "Default"
}

export default YouTubeComponent