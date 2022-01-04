import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Beranda from './components/Beranda/Beranda';
import { useEffect, useState } from 'react'
import BookManagement from './components/BookManagement/BookManagement';
import axios from 'axios';

function App() {
  const [books, setbooks] = useState([
    { _id: 1, judul: "OnePiece", pengarang: "EciroOda", harga: 20000, stock: 7 },
    { _id: 1, judul: "Naruto", pengarang: "Mahi", harga: 15000, stock: 5 }

  ])

  // merender
  useEffect(() => {
    retrieveData()
  }, [])

  // Mengambil data dari server
  const retrieveData = () => {
    axios.get('http://localhost:4000/book')
      .then((res) => {
        setbooks(res.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  // function untuk input data
  const storeData = (inputBook) => {
    // console.log(inputBook)
    axios.post('https://localhost:4000/book/add', inputBook)
      .then((res) => {
        setbooks((prevBooks) => [...prevBooks, inputBook])
        alert("Data Berhasil ditambahkan")
      })
      .catch((error) => {
        console.log(error.res.data)
      })
  }

  // function untuk merubah data
  const updateData = (inputBook) => {
    // console.log(inputBook)
    axios.put('http://localhost:4000/book/update' + inputBook._id, inputBook)
      .then((res) => {
        // Memanggil function retrieveData untuk merefresh
        retrieveData()
        alert("Data Berhasil diubah")
      })
      .catch((error) => {
        console.log(error.res.data)
      })
  }

  // funtion untuk menghapus data
  const deleteData = (inputBook) => {
    // console.log(inputBook)
    axios.delete('http://localhost:4000/book/delete' + books._id)
      .then(() => {
        // Memanggil function retrieveData untuk merefresh
        retrieveData()
        alert("Data Berhasil dihapus")
      })
      .catch((error) => {
        console.log(error.res.data)
      })
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda bookList={books} />} />
        <Route path="/book-management" element={<BookManagement
          bookList={books}
          store={storeData}
          update={updateData}
          remove={deleteData} />} />
      </Routes>
    </Router>
  );
}

export default App;
