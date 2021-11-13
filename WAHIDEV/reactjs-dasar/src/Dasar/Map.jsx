import React from 'react'

// Membuat variabel makanan dan menu
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


const Map = () => {
    return (
        <div>
            <h2>Map sederhana</h2>
            {/* Makanans mengaliakan menjadi makanan */}
            <ul>{makanans.map(makanan => (
                <li> {makanan.nama} - Harga {makanan.harga}</li>
            )

            )}
            </ul>
        </div>
    )
}

export default Map
