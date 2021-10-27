import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import BlogPost from '../BlogPost/BlogPost'
import LifeCycle from '../LifeCylce/LifeCycle'
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp'
import Product from '../Product/Product'
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
                    </div>
                    {/* exact berguna untuk halaman home tidak mengikut saat berpindah */}
                    <Route path="/" exact component={BlogPost}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycle}></Route>
                </Fragment>
            </Router>

        )
    }
}

export default Home
