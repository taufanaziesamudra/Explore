// StateFull Component
// import React, { Component, Fragment } from 'react'
// import './Product.css'
// import CardProduct from './CardProduct'

// export class Product2 extends Component {
//     state = {
//         order: 4,
//         name: 'Taufan Ajie Samudro',
//     }

//     // Function untuk mengupdate state
//     // Meneriman value dari carProduct
//     handleCounter = (newValue) => {
//         this.setState({
//             order: newValue
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
//                 {/* Membuat props dengan nama counterChange */}
//                 {/* Function handle counter akan menerima setiap perubahan */}
//                 <CardProduct counterChange={(kirim) => this.handleCounter(kirim)} />
//             </Fragment>
//         )
//     }
// }

// export default Product2





// Functional Component
import React, { Fragment, useState } from 'react'
import CardProduct from './CardProduct'
import './Product.css'
const Product2 = () => {
    // Menginisialisasi state
    const [state, setState] = useState({
        order: 4,
        nama: 'Taufan Ajie Samudro'
    })

    const handleCounter = (newValue) => {
        setState({
            order: newValue
        })
    }
    // // Method Plus
    // const handlePlus = () => {
    //     setState({
    //         order: state.order + 1
    //     })
    // }
    // // Method Minus
    // const handleMinus = () => {
    //     if (state.order > 0) {
    //         setState({
    //             order: state.order - 1
    //         })
    //     }
    // }

    return (
        <Fragment>
            <div className='header'>
                <div className='logo'>
                    <img src='' alt=''></img>
                </div>

                <div className='troley'>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/3144/3144456.svg" alt="" />
                    {/* Menerima state "order" */}
                    <div className='count'>{state.order}</div>
                </div>
            </div>
            {/* Meneriam Cardproduct diman akan dikrimkan props */}
            <CardProduct order={state.order}
                // Mengrim method handlePlus dan hanldeMinus
                // handlePlus={handlePlus}
                // handleMinus={handleMinus}
                // Membuat props "counterChange yang akan diterima oleh CardProduct"
                counterChange={(value) => handleCounter(value)} />
        </Fragment>
    )
}

export default Product2