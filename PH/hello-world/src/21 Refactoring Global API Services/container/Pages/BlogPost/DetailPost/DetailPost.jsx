import axios from 'axios'
import React, { Component } from 'react'
import './DetailPost.css'

export class DetailPost extends Component {
    state = {
        post: {
            title: "",
            body: ""
        }
    }
    // 1. Memanggil lifecycle componentDidMount
    componentDidMount() {
        // console.log(this.props.match.params.postID)
        // 2. Membuat variabel untuk id, dimana didapatkan dari params
        const id = this.props.match.params.postID
        // 3. Memanggil postingan post
        axios.get(`http://localhost:3004/posts/${id}`)
            .then(res => {
                console.log('res', res)
                // 5. Membuat variabel data dimana didapatkan dari params
                const post = res.data
                // 6. Mengganti state dengan value yang terbaru
                this.setState({
                    post: {
                        title: post.title,
                        body: post.body
                    }
                })
            })
    }
    render() {
        return (
            <div className="p-detail-psot">
                {/* Memamggil state title */}
                <p className="detail-title">{this.state.post.title}</p>

                {/* Memanggil state body */}
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        )
    }
}

export default DetailPost
