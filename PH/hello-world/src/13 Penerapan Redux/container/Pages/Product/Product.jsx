// Library
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

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
                        {/* Menerima value dari order */}
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                {/* 1. Membuat props dengan nama counterChange yang akan dikirimkan ke CardProduct */}
                {/* 2. Akan menerima value yang dikirimkan dari CardProduct
                    lalu value tersebut akan dikirimkan ke handleProduct */}
                <CardProduct />
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product)
