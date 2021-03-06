import React from 'react'

const Post = (props) => {
    return (
        <div className="post">
            <div className="img-thumb">
                <img src="http://placeimg.com/200/150/tech" alt="dummy"></img>
            </div>
            <div className="content">
                {/* Menerima props godetail */}
                <p className="title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="desc">{props.data.body}</p>
                {/* Menerima props update
                    dimana update membutuhkan data */}
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                {/* Menerima props delete
                    dimana delete membutuhkan id*/}
                <button className="delete" onClick={() => props.delete(props.data.id)}>Remove</button>


            </div>
        </div>
    )
}

export default Post
