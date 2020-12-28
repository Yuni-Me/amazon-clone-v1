import React from 'react'
import './CartTotal.css'

function CartTotal() {
    return (
        <div className='CartTotal'>
            <h3>Subtotal(3 items): $1,500.00</h3>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal
