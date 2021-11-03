// Library
import React, { Component, Fragment } from 'react'
import { GLobalConsumer } from '../../../context/context'

// Component Product
import CardProduct from './CardProduct/CardProduct'

// Style
import './Product.css'

export class Product extends Component {
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
                        <div className="count">{this.props.state.totalOrder}</div>
                    </div>
                </div>
                <CardProduct />
            </Fragment>
        )
    }
}

export default GLobalConsumer(Product)
