const { createStore } = require('redux') // Mengimport redux

const initialState = { // State secara global atau yang akan dipakai dimana saja
    dataBlogs: [],
    name: 'Taufan Ajie'
}

// Reducer sebuah function yang menerima parameter state & action
const reducer = (state = initialState, action) => {
    // Jika action.type bernama 'UPDATE_DATA_BLOG bila
    // action 'UPDATE_DATA _BLOG maka akan mereturn ambil 
    // ...state dan ambil dataBlog menjadi action.payload
    if (action.type === 'UPDATE_DATA_BLOG') {
        return {
            ...state,
            dataBlogs: action.payload
        }
    }
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Samudro'
        }
    }
    // Dan pastikan reducer meretrun state
    return state
}

const store = createStore(reducer) // Membuat variabel store yang akan memerlukan reducer

export default store