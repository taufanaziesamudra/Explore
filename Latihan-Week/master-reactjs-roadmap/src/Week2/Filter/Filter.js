import React from 'react'

const Filter = () => {
  const Eats = [
    { name: 'Burger', price: 10000 },
    { name: 'Spagetti', price: 50000 },
    { name: 'HotDog', price: 20000 }
  ]

  // Reduce
  // Reduce adalah function untuk pertambahan dair JS
  // 1. Membuat variabel baru dengan total_bayar
  // 2. Diamana total_bayar adalah varibel dari makanans dengan mengikuti reduce
  // 3. Didalam reduce ada variabel total_harga dan makanan diasliaskan menjadi makanan
  // 4. Merender dari total_bayar diamana makana anakn dijumlahkan semua

  const totalPrice = Eats.reduce((totalEat, Eat) => {
    return totalEat + Eat.price
  }, 0)
  return (
    <div>
      <h1>Map</h1>
      <ul>
        {/* Eats mengaliaskan menjadi Eat */}
        {/* 1. Memanggil variabel Eats */}
        {/* 2. Memanggil function ES6 berupa map */}
        {/* 3. Lalu variabel makanans  diinisialisasikan menjadi makanan tanpa (s) */}
        {Eats.map((Eat) => (
          <li>{Eat.name} - Price {Eat.price}</li>
        ))}
      </ul>



      <h2>Map Filter Harga lebih mahal dari 10000</h2>
      {/* Filter adalah suatu function dari ES6 dari Java Script yang berguna
      untuk menyaring angka2 yang bisa dikatakan lebih besar atau lebih kecil */}

      {/* Sedangkan index adalah untuk menampilkan angka yang sudah teratur oleh JS 
      dimulai dari angka 0 dan bisa diubah */}
      <ul>
        {Eats.filter((Eat) => Eat.price > 11000).map((Eat, index) => (
          <li>{index + 1}. {Eat.name} - {Eat.price}</li>
        ))}
      </ul>

      <h1>Total Price: {totalPrice}</h1>

    </div>
  )
}

export default Filter