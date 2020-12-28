import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import './Cart.css'


function Cart() {
    
    return (
        <div className='Cart'>
            <CartItems />
            <CartTotal />
        </div>
    )
}

export default Cart
