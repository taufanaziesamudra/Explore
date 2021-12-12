// import logo from './logo.svg';
import './App.css';
// import Home1 from './01 Latihan/components/Home1';
// import Home2 from './02 Latihan/Home2';
import Beranda from './Camp404/components/Beranda';
import Navbar from './Camp404/components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ManajemenBuku from './Camp404/components/ManajemenBuku';
import { useState } from 'react';

function App() {
  const [books, setbooks] = useState([
    { _id: 1, judul: "OnePiece", pengarang: "EciroOda", harga: 20000, stock: 7 },
    { _id: 1, judul: "Naruto", pengarang: "Mahi", harga: 15000, stock: 5 }

  ])
  function storeData(inputBook) {
    console.log(inputBook)
    alert("Data Berhasil ditambhakn")
  }
  function updateData(inputBook) {
    console.log(inputBook)
    alert("Date berhasil diubah")
  }
  function deleteData(inputBook) {
    console.log(inputBook)
    alert("Data berhasil dihapus")
  }
  return (
    <div>
      {/* <Home1 /> */}
      {/* <Home2 /> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Beranda bookList={books} />}></Route>
          <Route path="/manajemen-buku" element={<ManajemenBuku
            bookList={books}
            store={storeData}
            update={updateData}
            remove={deleteData} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
