import React, { Fragment, useState } from 'react'
import CardProduct from './CardProduct'
import './Product.css'

const Product = () => {
    const [state, setState] = useState({
        order: 10,
        name: 'Taufan Ajie Samudro'
    })

    // const handleMinus = () => {
    // if (state.order > 0) {
    // setState({
    // order: state.order - 1
    // })
    // }
    // }

    // const handlePlus = () => {
    // setState({
    // order: state.order + 1
    // })
    // }


    const handleCounter = (newValue) => {
        setState({
            order: newValue
        })
    }
    return (
        <Fragment>
            <div className='header'>
                <div className='logo'>
                    <img src='' alt=''></img>
                </div>

                <div className='troley'>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg" alt="" />
                    <div className='count'>{state.order}</div>
                </div>
            </div>

            {/* <div className='card'> */}
            {/* <div className='img-thumb-prod'> */}
            {/* </div> */}
            {/* <p className='product-title'> Daging Ayam</p> */}
            {/* <p className='product-price'>Rp.54.0000</p> */}

            {/* <div className='counter'> */}
            {/* <button className='minus' onClick={handleMinus}>-</button> */}
            {/* <input className='type' value={state.order}></input> */}
            {/* <button className='plus' onClick={handlePlus}>+</button> */}
            {/* </div> */}
            {/* </div> */}

            <CardProduct 
            order={state.order}
            setState={setState}
            counterChange={handleCounter} />
        </Fragment>
    )
}

export default Product