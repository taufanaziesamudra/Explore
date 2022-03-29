// StateFull Compnent
// import React, { Component, Fragment } from 'react'
// import './Product.css'
// export class Product extends Component {
//     // Menginitsialisai state
//     state = {
//         order: 4,
//         name: 'Taufan Ajie Samudro',
//     }
//     // Method plus
//     handlePlus = () => {
//         this.setState({
//             order: this.state.order + 1
//         })
//     }
//     // Method Minus
//     hanldeMinus = () => {
//         if (this.state.order > 0) {
//             this.setState({
//                 order: this.state.order - 1
//             })
//         }
//     }
//     // Method merubah name dengan value berubah
//     handleChange = (berubah) => {
//         this.setState({
//             name: berubah
//         })
//     }

//     render() {
//         return (
//             <Fragment>
//                 <div className='header'>
//                     <div className='logo'>
//                         <img src='' alt=''></img>
//                     </div>

//                     <div className='troley'>
//                         <img src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg" alt="" />
//                         <div className='count'>{this.state.order}</div>
//                     </div>
//                 </div>

//                 <div className="card">
//                     <div className="img-thumb-prod">
//                         <img src="data:image/jpeg;base64,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" alt=''></img>
//                     </div>
//                     <p className="product-title">Daging Orang</p>
//                     <p className="product-price">Rp. 54.000</p>
//                     <div className="counter">
//                         {/* Menerima method Minus */}
//                         <button onClick={this.hanldeMinus} className="minus">-</button>

//                         {/* Menerima state "order" */}
//                         <input className="type" value={this.state.order}></input>

//                         {/* Meneriam method plus */}
//                         <button onClick={this.handlePlus} className="plus">+</button>

//                         {/* Menerima state "name" */}
//                         <input className="type" value={this.state.name}></input>

//                         {/* Menerima method "handleChnge dengan value" */}
//                         <button onClick={() => this.handleChange('Topan')}>Berubah</button>
//                     </div>
//                 </div>
//             </Fragment>
//         )
//     }
// }

// export default Product





// Functional Component
import React, { Fragment, useState } from 'react'
import './Product.css'

const Product = () => {
    // Menginitsialisai state
    const [state, setState] = useState({
        order: 4,
        nama: 'Taufan'
    })
    // Method plus
    const handlePlus = () => {
        setState({
            order: state.order + 1
        })
    }
    // Method minus
    const handleMinus = () => {
        if (state.order > 0) {
            setState({
                order: state.order - 1
            })
        }
    }
    return (
        <Fragment>
            <div className='header'>
                <div className='logo'>
                    <img src='' alt='' />
                </div>

                <div className='troley'>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg" alt="" />
                    <div className='count'>{state.order}</div>
                </div>
            </div>
            <div className='card'>
                <div className='img-thumb-prod'>
                    <img src='data:image/jpeg;base64,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' alt=''></img>
                </div>
                <p className='product-title'> Daging Ayam</p>
                <p className='product-price'>Rp.54.0000</p>
                <div className='counter'>
                    {/* Menerima method Minus */}
                    <button className='minus' onClick={handleMinus}>-</button>

                    {/* Menerima state "order" */}
                    <input className='type' value={state.order}></input>

                    {/* Menerima method Plus */}
                    <button className='plus' onClick={handlePlus}>+</button>

                </div>
            </div>
        </Fragment >
    )
}

export default Product