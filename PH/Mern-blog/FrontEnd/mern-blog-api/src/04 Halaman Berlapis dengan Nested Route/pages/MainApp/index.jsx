import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer, Header } from '../../components'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'

const MainApp = () => {
    return (
        <div>
            <Header />
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='create-blog' element={<CreateBlog />} />
                    <Route path=':detail-blog' element={<DetailBlog />} />
                </Routes>
            </div>
            <Footer />
        </div >
    )
}

export default MainApp
