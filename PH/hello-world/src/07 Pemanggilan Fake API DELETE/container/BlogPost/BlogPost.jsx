import React, { Component, Fragment } from 'react'
import Post from '../../component/Post/Post'
import './BlogPost.css'
import axios from 'axios'

export class BlogPost extends Component {
    state = {
        post: [],
    }

    // Method untuk pemanggilan GET setelah didelete
    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    // Function atau method untuk menghapus
    // Method delete memerlukan object berupa data
    handleDelete = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`)
            .then((res) => {
                // Pemanggilan API setelah didelete
                this.getPostAPI()
            })
    }

    componentDidMount() {
        // Pemanggilan data
        this.getPostAPI()
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

    // // Pemanggilan API Json menggunakan Axios (install pankage axios)
    // // Pemanggilan API Json menggunakan db.json
    // componentDidMount() {
    //     axios.get('http://localhost:3000/posts')
    //         .then((res) => {
    //             this.setState({
    //                 post: res.data
    //             })
    //         })
    // }

    render() {
        return (
            <Fragment>
                <p className="section-title">BlogPost</p>
                {/* 2. Melooping atau maping dari post */}
                {
                    this.state.post.map(post => {
                        // 1. Mereturn props title dan desc, dari post
                        // 3. Membuat props delete yang akan dikirmkan ke post
                        // 4. Menyederhanakan post titl dan desc menjadi data dan mengganti pula untuk Post-nya
                        return <Post key={post.id} data={post} delete={this.handleDelete} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost
