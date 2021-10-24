import React, { Component } from 'react'
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp'
import Product from '../Product/Product'

export class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr /> */}

                {/* Membuat props dengan nama time, title dan desc
                dimana props tersebut akan dikirimkan ke YouTubeComp */}
                {/* <YouTubeComp
                    time="00:01"
                    title="Aku belajar"
                    desc="Belajar Ngoding" />
                <YouTubeComp
                    time="00:02"
                    title="Aku sedang belajar"
                    desc="Belajar JavaScript" />
                <YouTubeComp
                    time="00:03"
                    title="Kadang aku males"
                    desc="Belajar React JS" />
                <YouTubeComp
                    time="00:04"
                    title="aku sedang belajar lagi"
                    desc="Bealajr fullstack" />
                <YouTubeComp /> */}

                <p>Product</p>
                <hr />
                <Product />
            </div>
        )
    }
}

export default Home
