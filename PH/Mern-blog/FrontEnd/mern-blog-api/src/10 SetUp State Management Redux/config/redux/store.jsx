const { createStore } = require('redux') // Mengimport redux

const initialState = { // State secara global atau yang akan dipakai dimana saja
    dataBlog: [],
    name: 'Taufan Ajie'
}

// Reducer sebuah function yang menerima parameter state & action
const reducer = (state = initialState, action) => {
    // Dan pastikan reducer meretrun state
    return state
}

const store = createStore(reducer) // Membuat variabel store yang akan memerlukan reducer

export default store