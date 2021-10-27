import React, { Component, Fragment } from 'react'
import CardProduct from '../CardProduct/CardProduct'
import './Product.css'
export class Product extends Component {
    state = {
        order: 4,
        name: "Taufan Ajie Samduro"
    }

    // Membuat Method untuk mengupdate state
    // Menerima newValue dari CardProduct
    handleCounter = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    // // Method untuk Plus
    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     })
    // }

    // // Method untuk Minus
    // hanldeMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         })
    //     }

    // }

    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>

                    <div className="troley">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg" alt="" />
                        {/* Menerima value dari order */}
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                {/* 1. Membuat props dengan nama counterChange yang akan dikirimkan ke CardProduct */}
                {/* 2. Akan menerima value yang dikirimkan dari CardProduct
                    lalu value tersebut akan dikirimkan ke handleProduct */}
                <CardProduct counterChange={(value) => this.handleCounter(value)} />
            </Fragment>
        )
    }
}

export default Product
