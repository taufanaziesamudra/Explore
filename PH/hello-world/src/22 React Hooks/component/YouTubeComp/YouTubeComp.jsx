import React from 'react'
import './YouTubeComp.css'

// Menerima data dari Home berupa time, title dan desc
// yang akan diterima oleh props
const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/EbdwcqZAkN0/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLDDULNq365sJdQJk189nrjDS3YoAQ" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div >
    )
}

// Untuk memberikan nilai default pada props
YouTubeComp.defaultProps = {
    time: "00:00",
    title: "Title Here",
    desc: "Default"
}

export default YouTubeComp
