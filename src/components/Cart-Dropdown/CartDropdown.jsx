import React ,{ useContext } from 'react';
import Button from '../Button/Button-component';
import { useNavigate } from 'react-router-dom';
import CartItem from '../cart-item/cart-item';
import { useSelector } from 'react-redux';
import {CartDropdownContainer ,EmptyMessage , CartItems} from "./cart-dropdown.styles.jsx"
import { BUTTON_TYPE_CLASSES } from '../Button/Button-component';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {

    const navigate = useNavigate();

    const goToCheckoutHandler = ()=>{
        navigate("/checkout")
    }

    const cartItems = useSelector(selectCartItems)

    return (
        <CartDropdownContainer>
        <CartItems>
        {
            cartItems.length ? cartItems.map((item)=>{
         return (<CartItem key={item.id} cartItem={item}/>)}) : 
         <EmptyMessage> Your Cart is empty </EmptyMessage>
        }
        
        </CartItems>
        <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>Go To Checkout</Button>
        </CartDropdownContainer>
    );
}

export default CartDropdown;
