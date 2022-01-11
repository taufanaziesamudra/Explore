// import logo from '../assets/images/logo.svg';
import './App.css';
import { Routes, store } from '../config'
import { Provider } from 'react-redux';

function App() {
  return (
    // store ialah yang akan menampung seluruh global state
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
