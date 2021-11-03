// Memanggil redux
const redux = require("redux")
// Membuat store
const createStore = redux.createStore

// 3. Membuat varialbel initailstate yang akan digunakan di rootreducer 
const initialState = {
    value: 0,
    age: 17
}

// 2. Reducer (Membuat varibel root reducer)
// Membuat variabe reducer diamana reducer memerlukan sebuah   parameter berupa state dan action, yang akan dipanggil di variable store
const rootReducer = (state = initialState, action) => {
    console.log(action)
    //     if (action.type === "ADD_AGE") {
    //         return {
    //             ...state,
    //             age: state.age + 1
    //         }
    //     }

    //     if (action.type === "CHANGE_VALUE") {
    //         return {
    //             ...state,
    //             value: state.value + action.newValue
    //         }
    //     }
    //     return state
    // }

    switch (action.type) {
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1
            }
        case "CHANGE_VALUE":
            return {
                ...state,
                value: state.value + action.newValue
            }
        default: return state
    }
}
// 1. Store (Membuat variabel store)
// Mambuat variabel store diamana disi berupa funciton yang mana function tersbut memerlukan sebuah reducer
const store = createStore(rootReducer)
console.log(store.getState())

// Subcrioption
store.subscribe(() => {

})

// Dispacthing Action
// Dispatch memerlukan type dimana type harus huruf kapital
// kemudian dispatch akan memanggil root reducer
store.dispatch({ type: "ADD_AGE" })
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 })
