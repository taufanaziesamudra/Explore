import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="dummy"></img>
            </div>
            <div className="content">
                <p className="title">{props.data.title}</p>
                <p className="desc">{props.data.body}</p>

                {/* Menerima props delete */}
                <button className="delete" onClick={() => props.delete(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post
