// Library
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import GlobalProvider from '../../context/context'

// Pages
import BlogPost from '../Pages/BlogPost/BlogPost'
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost'
import LifeCycle from '../Pages/LifeCylce/LifeCycle'
import Product from '../Pages/Product/Product'
import YouTubeCompPages from '../Pages/YouTubeCompPages/YouTubeCompPages'

// Style
import './Home.css'

export class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">BlogPost</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtubecomppages">YouTubeCompPage</Link>
                    </div>
                    <Route path="/" exact component={BlogPost}></Route>
                    <Route path="/detail-post/:postID" component={DetailPost}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/lifecycle" component={LifeCycle}></Route>
                    <Route path="/youtubecomppages" component={YouTubeCompPages}></Route>
                </Fragment>
            </Router>

        )
    }
}

export default GlobalProvider(Home)
