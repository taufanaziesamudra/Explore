import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Beranda from './components/Beranda/Beranda';
import { useState } from 'react'
import BookManagement from './components/BookManagement/BookManagement';

function App() {
  const [books, setbooks] = useState([
    { _id: 1, judul: "OnePiece", pengarang: "EciroOda", harga: 20000, stock: 7 },
    { _id: 1, judul: "Naruto", pengarang: "Mahi", harga: 15000, stock: 5 }

  ])

  // function untuk input data
  const storeData = (inputBook) => {
    console.log(inputBook)
    alert("Data Berhasil ditambahkan")
  }

  // function untuk merubah data
  const updateData = (inputBook) => {
    console.log(inputBook)
    alert("Data Berhasil diubah")
  }

  // funtion untuk menghapus data
  const deleteData = (inputBook) => {
    console.log(inputBook)
    alert("Data Berhasil dihapus")
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
