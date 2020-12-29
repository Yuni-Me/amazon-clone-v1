import React from 'react'
import CartItems from './CartItems'
import CartTotal from './CartTotal'
import './Cart.css'


function Cart(props) {
    
    // const [ cartItem, setCartItem ] = useState();

    return (
        <div className='Cart'>
            <CartItems cartItems={props.cartItems}/>
            <CartTotal cartItems={props.cartItems}/>
        </div>
    )
}

export default Cart
