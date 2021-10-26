import React, { Component, Fragment } from 'react'
import Post from '../../component/Post/Post'
import './BlogPost.css'
import axios from 'axios'

export class BlogPost extends Component {
    state = {
        post: [],
        // Membuat state baru dengan formBlogPost
        formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
        }
    }

    // Method untuk pemanggilan GET setelah didelete
    getPostAPI = () => {
        // Pemanggilan API secara terbalik dengan sort=d&_order=desc
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    // Method untuk mempost
    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                // Memanngil kembali data getPostAPI setelah dipost
                this.getPostAPI()
                console.log(res)
            }, (error) => {
                console.log("error", error)
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

    // Function atau method ketika input berubah
    // 1. Menerima nilai dari inputan berupa event
    handleFormChange = (event) => {
        // Membuat variabel baru dengan nama formBlogPostNew
        // dan data tersbut diambil dari state formBlogPost
        const formBlogPostNew = { ...this.state.formBlogPost }

        // Membuat id
        const timeStamp = new Date().getTime()
        // Untuk menyasar id
        formBlogPostNew["id"] = timeStamp

        // 1. Menyasar target saja
        // 2. Menyasar ke name dimana name adalah sebuah value dari inputan
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    // Mehtod untuk menyimpan postingan
    handleSubmit = () => {
        // Memanggil method PostDataToAPI
        this.postDataToAPI()
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
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title"
                        // 1. Event onchange menerima perubahan diinput
                        // 2. Menerima method handleFormChange
                        onChange={this.handleFormChange}></input>

                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content"
                        // Menerima method handleFormChange
                        onChange={this.handleFormChange}></textarea>

                    {/* Menerima method submit */}
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>
                {/* 2. Melooping atau maping dari post */}
                {
                    this.state.post.map(post => {
                        // 1. Mereturn props title dan desc, dari post
                        // 3. Membuat props delete yang akan dikirmkan ke post
                        // 4. Menyederhanakan post title dan desc menjadi data dan mengganti pula untuk Post-nya
                        return <Post key={post.id} data={post} delete={this.handleDelete} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost
