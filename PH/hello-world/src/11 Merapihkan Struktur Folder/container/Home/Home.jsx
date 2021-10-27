// Library
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Pages
import BlogPost from '../Pages/BlogPost/BlogPost'
import LifeCycle from '../Pages/LifeCylce/LifeCycle'
import Product from '../Pages/Product/Product'
import YouTubeCompPages from '../Pages/YouTubeCompPages/YouTubeCompPages'

// Style
import './Home.css'

export class Home extends Component {
    state = {
        showComponent: true
    }
    render() {
        return (
            // 1. Set up BrowserRouter dan nama menjadi Router
            // 2. Set up Route dimana exact component adalah home
            //    atau halaman awal yang tidak terbawa oleh pages lain
            // 3. Bungkus halaman dengan fragment
            // 4. Sediakan link untuk berpindah halaman
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">BlogPost</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="youtubecomppages">YouTubeCompPage</Link>
                    </div>
                    {/* exact berguna untuk halaman home tidak mengikut saat berpindah */}
                    <Route path="/" exact component={BlogPost}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycle}></Route>
                    <Route path="/youtubecomppages" component={YouTubeCompPages}></Route>
                </Fragment>
            </Router>

        )
    }
}

export default Home
