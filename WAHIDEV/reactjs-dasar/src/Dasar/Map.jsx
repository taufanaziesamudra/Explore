import React from 'react'

// Membuat variabel makanans berupa data array
const makanans = [
    {
        nama: "Soto",
        harga: 12000,
    },
    {
        nama: "Mie Ayam",
        harga: 7000,
    },
    {
        nama: "Daging Ayama",
        harga: 5000,
    },
    {
        nama: "Nasi Goreng",
        harga: 20000
    }

]

// Reduce
// Reduce adalah function untuk pertambahan dair JS
// 1. Membuat variabel baru dengan total_bayar
// 2. Diamana total_bayar adalah varibel dari makanans dengan mengikuti reduce
// 3. Didalam reduce ada variabel total_harga dan makanan diasliaskan menjadi makanan
// 4. Merender dari total_bayar diamana makana anakn dijumlahkan semaua
const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga + makanan.harga
}, 0)
const Map = () => {
    return (
        <div>
            <h2>Map sederhana</h2>
            {/* Makanans mengaliaskan menjadi makanan */}
            {/* 1. Memanggil variabel makanans */}
            {/* 2. Memnggil function ES6 berupa map */}
            {/* 3. Lalu variabel makanans  diinisialisasikan menjadi makanan tanpa (s)*/}
            <ul>{makanans.map((makanan => (
                <li> {makanan.nama} - Harga {makanan.harga}</li>
            )

            ))}
            </ul>

            <h2>Map Filter Harga lebih dari 11.000</h2>
            {/* Filter adalah suatu function dari ES6 dari Java Script yang berguna
            untuk menyaring angka2 yang bisa dikatakan lebih besar atau lebih kecil */}
            {/* Sedangkan index adalah untuk menampilkan angka yang sudah teratur oleh JS 
            dimulai dari angka 0 dan bisa diubah */}
            <ul>{makanans
                .filter((makanan) => makanan.harga > 11000)
                .map((makanan, index) => (
                    <li>
                        {index + 1}. {makanan.nama} - {makanan.harga}
                    </li>
                ))}
            </ul>
            {/* Total harga menerima pertambahan dari variable yang sudah dibuat */}
            <h1>Total Harga: {total_bayar}</h1>
        </div>
    )
}

export default Map
