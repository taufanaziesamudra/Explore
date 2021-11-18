import React, { useState } from 'react'

// Menerima props yang berupa greeting
const Greeting = ({ greeting }) => {
    // ini state menggunakan functional component atau menggunakan useState
    const [data, setData] = useState('Halo selamat datang')

    return (
        <div >
            {/* Merender props yang dikirim oelh props h2 */}
            <h2>props: {greeting}</h2>

            {/* Mender state di functional component */}
            <h2>state di functional component: {data}</h2>

            {/* Button untuk memanggil function setData (mengubah state) */}
            <button onClick={() => setData('Berubah selamat datang')}>Ganti</button>
        </div>
    )
}

export default Greeting