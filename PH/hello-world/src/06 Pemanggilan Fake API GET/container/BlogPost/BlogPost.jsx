import React, { Component, Fragment } from 'react'
import Post from '../../component/Post/Post'
import './BlogPost.css'
import axios from 'axios'

export class BlogPost extends Component {
    state = {
        post: [],
    }

    // // Pemanggilan API Json menggunakan fetch
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => {
    //             this.setState({
    //                 post: json
    //             })
    //         })
    // }

    // Pemanggilan API Json menggunakan Axios (install pankage axios)
    // Pemanggilan API Json menggunakan db.json
    componentDidMount() {
        axios.get('http://localhost:3000/posts')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <p className="section-title">BlogPost</p>
                {/* 2. Melooping atau maping dari post */}
                {
                    this.state.post.map(post => {
                        // 1. Mereturn props title dan desc, dari post 
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost
