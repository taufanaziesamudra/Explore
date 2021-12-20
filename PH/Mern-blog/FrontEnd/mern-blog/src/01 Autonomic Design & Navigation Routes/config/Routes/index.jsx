import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home, Login } from '../../pages'
import { Register } from '../../pages'

const Routes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/login'><Login /></Route>
                <Route path='register'><Register /></Route>
                <Route path='/'><Home /></Route>
            </Routes>
        </Router>
    )
}

export default Routes
