import { createStore } from 'redux' // Mengimport redux
import reducer from './reducer/reducer'

const store = createStore(reducer) // Membuat variabel store yang akan memerlukan reducer

export default store