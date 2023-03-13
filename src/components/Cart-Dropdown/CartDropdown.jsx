import React from 'react';
import Button from '../Button/Button-component';
import "./cart-dropdown.styles.scss"
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartDropdown = () => {

    const { cartItems }= useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map((item)=>{
         return (<CartItem key={item.id} cartItem={item}/>)})}
        </div>
        <Button>Go To Checkout</Button>
        </div>
    );
}

export default CartDropdown;
