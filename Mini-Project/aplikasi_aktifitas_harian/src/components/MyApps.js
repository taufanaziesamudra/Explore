import React, { Component } from 'react'
import '../App.css'
import Header from './Header'

class MyApps extends Component {
    state = {
        todos: [],
        // jam: '',
        // aktifitas: ''
    }

    // handleChange = (event) => {
    // this.setState({
    // [event.target.name]: event.target.value
    // })
    // console.log('Data', this.state)
    // }


    handeSubmit = (event) => {
        event.preventDefault()
        // Membuat variabel untuk mengisi form input
        let jam = this.refs.jam.value
        let aktifitas = this.refs.aktifitas.value

        // Function untuk menambahkan inputan
        this.state.todos.push({ jam, aktifitas })
        this.setState({
            todos: this.state.todos
        })

        this.refs.formulir.reset()
    }


    render() {
        return (
            <div className='App'>
                <Header />
                <form ref='formulir' className="form-inline">
                    <input
                        type='text'
                        className='form-control'
                        size='8'
                        ref='jam'
                        placeholder='Jam Aktifitas'
                        onChange={this.handleChange} />

                    <input
                        type='text'
                        className='form-control'
                        size='30'
                        ref='aktifitas'
                        placeholder='Jenis Aktifistas'
                        onChange={this.handleChange} />
                    <button className='btn btn-info' onClick={this.handeSubmit}>Save</button>
                </form>
                <hr />
                <div>
                    <ul>
                        {this.state.todos.map((data, i) =>
                            <li key={i}>
                                <div className='todo-wrapper'>
                                    {data.jam} :
                                    {data.aktifitas}
                                </div>
                            </li>)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default MyApps