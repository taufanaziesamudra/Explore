// Library
import React, { Component, Fragment } from 'react'
import axios from 'axios'

// Component Pages
import Post from '../../../component/Post/Post'

// Style
import './BlogPost.css'
import API from '../../../services'

export class BlogPost extends Component {
    state = {
        post: [],
        // Membuat state baru dengan formBlogPost
        formBlogPost: {
            id: 1,
            title: "",
            body: "",
            userId: 1,
        },
        // State baru, untuk fungsi update yang bernilai false
        isUpdate: false,
        comments: []
    }

    // Method untuk get dari Global Services
    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            })
        })
        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
    }

    // Method untuk mempost dari Global Services
    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost)
            .then((res) => {
                this.getPostAPI()
                this.setState({
                    formBlogPost: {
                        id: 1,
                        title: "",
                        body: "",
                        userId: 1
                    }
                })
            })
    }

    // Method untuk memanggil update atau PUT data
    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                console.log(res)
                // Pemanggilan getPostAPI untuk memastikan data yang terupdate
                this.getPostAPI()
                // Setelah diupdate seharusnya Blogpost menjadi kosong
                this.setState({
                    isUpdate: false,
                    formBlogPost: {
                        id: 1,
                        title: "",
                        body: "",
                        userId: 1
                    },
                })
            })
    }

    // Method delete dari Global Services
    handleDelete = (data) => {
        API.deleteNewsBlog(data)
            .then(result => {
                this.getPostAPI()
            })
    }

    // Function atau method untuk mengupdate data
    // Method update memerlukan object berupa data
    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }

    // Function atau method ketika input berubah
    // 1. Menerima nilai dari inputan berupa event
    handleFormChange = (event) => {
        // Membuat variabel baru dengan nama formBlogPostNew
        // dan mengambil dari dari state formBlogPost
        const formBlogPostNew = { ...this.state.formBlogPost }

        // Membuat id 
        const timeStamp = new Date().getTime()
        if (!this.state.isUpdate) {
            // Untuk menyasar id 
            formBlogPostNew["id"] = timeStamp
        }
        // 1.Menyasar target saja
        // 2.Meyasar ke name dimana name adalah value dari input
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }


    // Mehtod untuk menyimpan postingan
    handleSubmit = () => {
        // Jika isUpdate bernilai true
        if (this.state.isUpdate) {
            this.putDataToAPI()
        } else {
            // Memanggil method PostDataToAPI
            this.postDataToAPI()
        }
    }

    //Membutuhkan parameter berupa id
    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount() {
        // Pemanggilan data
        this.getPostAPI()
    }


    render() {
        return (
            <Fragment>
                <p>Halaman BlogPost</p>
                <hr />
                <p className="section-title">BlogPost</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title"
                        placeholder="add title"
                        // Menerima default value title
                        value={this.state.formBlogPost.title}

                        // 1. Event onchange menerima perubahan diinput
                        // 2. Menerima method handleFormChange
                        onChange={this.handleFormChange}></input>

                    <label htmlFor="body">Blog Content</label>

                    <textarea name="body" id="body"
                        cols="30" rows="10" placeholder="add blog content"
                        // Menerima default value body
                        value={this.state.formBlogPost.body}

                        // Menerima method handleFormChange
                        onChange={this.handleFormChange}></textarea>

                    {/* Menerima method submit */}
                    <button className="btn-submit" onClick={this.handleSubmit}>Save</button>
                </div>

                {/* Melooping atau memanggil comment
                {
                    this.state.comments.map(Comment => {
                        return <p>{Comment.name} - {Comment.email}</p>
                    })
                } */}

                {/* 2. Melooping atau maping dari post */}
                {
                    this.state.post.map(post => {
                        // 1. Mereturn props title dan desc, dari post
                        // 3. Membuat props delete yang akan dikirmkan ke post
                        // 4. Menyederhanakan post title dan desc menjadi data dan mengganti pula untuk Post-nya
                        return <Post key={post.id}
                            data={post}
                            delete={this.handleDelete}
                            update={this.handleUpdate}
                            goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost
