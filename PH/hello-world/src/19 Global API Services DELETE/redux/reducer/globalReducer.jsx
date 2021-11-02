import Actiontype from "./globalActionType"

const globalState = {
    totalOrder: 0
}

// 2. Reducer
const rootReducer = (state = globalState, action) => {
    if (action.type === Actiontype.PLUS_ORDER) {
        return {
            ...state,
            totalOrder: state.totalOrder + 1
        }
    }

    if (action.type === Actiontype.MINUS_ORDER) {
        let totalOrder = 0
        if (state.totalOrder > 0) {
            totalOrder = state.totalOrder - 1
        }
        return {
            ...state,
            totalOrder: totalOrder
        }
    }
    return state
}

export default rootReducer