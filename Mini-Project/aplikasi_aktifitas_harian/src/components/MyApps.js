import React, { useState } from 'react'

const MyApps = () => {
    const [state, setState] = useState({
        input: '',
        submit: '',
    })

    const handleChange = (event) => {
        setState({
            input: event.target.value
        })
    }

    const handleSubmit = (event) => {
        // const jam = jam.value
        // const aktifitas = aktifitas.value
        event.preventDefault()
        setState({
            submit: state.input
        })
    }
    return (
        <div>
            <h2>Aplikasi Aktifitas Harian</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange}
                    value={state.input} placeholder='Jam Aktifitas' />
                <input type='text' onChange={handleChange}
                    value={state.input} placeholder='Jenis Aktifistas' />
                <button type='submit'>Save</button>
            </form>
            <h1>{state.submit}</h1>
        </div>
    )
}

export default MyApps