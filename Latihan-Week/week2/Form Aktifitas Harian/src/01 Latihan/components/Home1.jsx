import React, { Component } from 'react'
import Age from './Age'
import Greeting from './Greeting'
import Information from './Information'
import Name from './Name'

export class Home1 extends Component {
    // Memanggil method constructor
    constructor(props) {
        super(props)

        // Init state
        this.state = {
            // Membuat state dengan nama properti data
            data: 'Hello World',

            // Membuat state dengan nama properti greeting
            greeting: 'Selamat datang di APlikasi React JS',

            // Membuat state isInformationShow dengan defaul value false
            isInformationShow: false,

            // Membuat state person yang didalamnya berisi object dengan nama properti name dan age
            person: {
                name: 'Taufan', age: 100
            }
        }
    }


    // Membuat method atau function untuk mengubah state data
    ChangeText = () => {
        // setState adalah method untuk mengubah state
        this.setState({
            data: 'Selamat Datang'
        })
    }

    // Membuat method atau function untuk manampilkan isInformationShow
    showInformation = () => {
        // setState adalah method untuk mengubah state
        this.setState({
            // Menayatakan state isInformation, jika tidak state isInformationShow
            // atau isInformationShow tidak terlihat
            isInformationShow: !this.state.isInformationShow
        })
    }

    // Membuat method atau function untuk mengisi name dan age dimana menerima event & property
    changePerson = (event, property) => {
        // setState adalah method untuk mengubah state
        this.setState({
            person: {
                ...this.state.person,
                [property]: event.target.value
            }
        })
    }

    render() {
        // Destructuring objecet state
        const { data, isInformationShow, person } = this.state

        return (
            <div>
                {/* Merender state class component */}
                <h1 id='judul'>State diclass component: {data}</h1>
                <hr />

                {/* Merender compoent greeting dan mengirim props */}
                <Greeting {...this.state} ChangeText={this.ChangeText} />
                <hr />
                {/* Merender component information dan mengirim props */}
                <Information isInformationShow={isInformationShow} showInformation={this.showInformation} />
                <hr />
                <Name person={person} changePerson={this.changePerson} />
                <Age person={person} changePerson={this.changePerson} />
            </div>
        )
    }
}

export default Home1
