import React ,{ useContext } from 'react';
import Button from '../Button/Button-component';
import { useNavigate } from 'react-router-dom';
import "./cart-dropdown.styles.scss"
import CartItem from '../cart-item/cart-item';
import { CartContext } from '../../contexts/cart.context';


const CartDropdown = () => {

    const navigate = useNavigate();

    const goToCheckoutHandler = ()=>{
        navigate("/checkout")
    }

    const { cartItems }= useContext(CartContext)

    return (
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map((item)=>{
         return (<CartItem key={item.id} cartItem={item}/>)})}
        </div>
        <Button onClick={goToCheckoutHandler}>Go To Checkout</Button>
        </div>
    );
}

export default CartDropdown;
