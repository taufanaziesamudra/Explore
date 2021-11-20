import React, { useState } from 'react'
import { DataContext } from '../../context/DataContext'
import { CartList, CartStyled } from './CartStyled'

const Cart = () => {
    const { dataContext, setDataContext } = useState(DataContext)
    const totalSummary = dataContext
        ? dataContext.carts.reduce((a, b) => a + (b.price * b.qty), 0)
        : 0

    const handleChangeQty = (e, id) => {
        const findProduct = dataContext && dataContext.carts.find((val) => val.id === id)
        findProduct.qty = e.target.value
        findProduct.stock = findProduct.stock_real - e.target.value
        setDataContext({ ...dataContext })
    }

    const handleAdjustQty = (type, id) => {
        const findProduct = dataContext && dataContext.carts.find((val) => val.id === id)
        const qty = type === '+' ? findProduct.qty + 1 : findProduct.qty - 1
        findProduct.qty = qty
        findProduct.stock = findProduct.stock_real - qty
        setDataContext({ ...dataContext })
    }

    console.log(dataContext)
    return (
        <div>
            <h2>Daftar Keranjang</h2>
            <CartStyled>
                <CartList>
                    {!dataContext ? (
                        <h2>Kerajang Kosong</h2>
                    ) : (
                        <table width='80%'>
                            <thead>
                                <tr>
                                    <th>No</th>
                                </tr>
                            </thead>
                        </table>
                    )}
                </CartList>
            </CartStyled>

        </div>
    )
}

export default Cart
