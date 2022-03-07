import { applyMiddleware, createStore } from 'redux' // Mengimport redux
import reducer from './reducer/reducer'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk)) // Membuat variabel store yang akan memerlukan reducer

export default store