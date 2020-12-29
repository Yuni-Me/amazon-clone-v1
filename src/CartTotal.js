import React from 'react'
import './CartTotal.css'

function CartTotal(props) {
    const getCount = () => {
        let count = 0;
        props.cartItems.forEach((item) => {
            count += item.cartItem.quantity
        });
        return count;
    }
    const getTotalPrice = () => {
        let total = 0;
        props.cartItems.forEach((item) => {
            total += (item.cartItem.price) * item.cartItem.quantity
        });
        return total;
    }

    return (
        <div className='CartTotal'>
            <h3>Subtotal({getCount()} items): ${getTotalPrice()}.00</h3>
            <button>Proceed to checkout</button>
        </div>
    )
}

export default CartTotal
