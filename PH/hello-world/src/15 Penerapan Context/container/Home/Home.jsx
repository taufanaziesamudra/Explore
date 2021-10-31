// Library
import React, { Component, Fragment, createContext } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// Pages
import BlogPost from '../Pages/BlogPost/BlogPost'
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost'
import LifeCycle from '../Pages/LifeCylce/LifeCycle'
import Product from '../Pages/Product/Product'
import YouTubeCompPages from '../Pages/YouTubeCompPages/YouTubeCompPages'

// Style
import './Home.css'

// 1. Membuat RootContext
export const RootContext = createContext()

// 2. Membuat Provider, dimana provider berfungsi untuk
//    menyimpan state global
const Provider = RootContext.Provider

export class Home extends Component {
    state = {
        totalOrder: 5
    }

    // Menerima sebuah parameter action
    dispatch = (action) => {
        if (action.type === "PLUS_ORDER") {
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }
        if (action.type === "MINUS_ORDER") {
            if (this.state.totalOrder > 0) {
                return this.setState({
                    totalOrder: this.state.totalOrder - 1
                })
            }

        }
    }

    render() {
        return (
            <Router>
                {/* Provider mempunyai sebuah value dimana value tersebut didapatkan
                    dari object yang kita buat dair state dan dispatch */}
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">BlogPost</Link>
                            <Link to="/product">Product</Link>
                            <Link to="/lifecycle">LifeCycle</Link>
                            <Link to="youtubecomppages">YouTubeCompPage</Link>
                        </div>
                        {/* exact berguna untuk halaman home tidak mengikut saat berpindah */}
                        <Route path="/" exact component={BlogPost}></Route>
                        {/* Set up untuk memanggil deatil */}
                        <Route path="/detail-post/:postID" component={DetailPost}></Route>
                        <Route path="/product" component={Product}></Route>
                        <Route path="/lifecycle" component={LifeCycle}></Route>
                        <Route path="/youtubecomppages" component={YouTubeCompPages}></Route>
                    </Fragment>
                </Provider>
            </Router>

        )
    }
}

export default Home
