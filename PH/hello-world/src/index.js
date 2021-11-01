import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import HelloComponent from './01 StateLess & StateFull Comp/component/HelloComponent';
// import Home from './02 Dynamic Comp Props/container/Home/Home';
// import Home from './03 Update Parent oleh Child/container/Home/Home';
// import Home from './04 LifeCycle/container/Home/Home';
// import Home from './05 BlogPost Get JSONPlaceholder/container/Home/Home';
// import Home from './06 Pemanggilan Fake API GET/container/Home/Home';
// import Home from './07 Pemanggilan Fake API DELETE/container/Home/Home';
// import Home from './08 Pemanggilan Fake API POST/container/Home/Home';
// import Home from './09 Pemanggilan Fake API PUT/container/Home/Home';
// import Home from './10 React Router/container/Home/Home';
// import Home from './11 Merapihkan Struktur Folder/container/Home/Home';
// import Home from './12 Params ke Hal Detail/container/Home/Home';
// import Home from './13 Penerapan Redux/container/Home/Home';
// import Home from './14 Refactoring Redux/container/Home/Home';
// import Home from './15 Penerapan Context/container/Home/Home';
import Home from './16 Refactoring Context dengan HOC/container/Home/Home';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux'
// import rootReducer from './14 Refactoring Redux/redux/reducer/globalReducer';

// Penerapan Redux
// // 3. const initState
// const globalState = {
//   totalOrder: 0
// }

// // 2. Reducer
// const rootReducer = (state = globalState, action) => {
//   if (action.type === "PLUS_ORDER") {
//     return {
//       ...state,
//       totalOrder: state.totalOrder + 1
//     }
//   }

//   if (action.type === "MINUS_ORDER") {
//     let totalOrder = 0
//     if (state.totalOrder > 0) {
//       totalOrder = state.totalOrder - 1
//     }
//     return {
//       ...state,
//       totalOrder: totalOrder
//     }
//   }
//   return state
// }

// // 1. Store
// const storeRedux = createStore(rootReducer)

// 4. Membungkus Home dengan provider 
// ReactDOM.render(<Provider store={storeRedux}><Home /></Provider>, document.getElementById('root'));



// Context
ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a f~unction
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
