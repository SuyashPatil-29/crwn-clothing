import React, { useContext } from 'react';
import {CheckoutItemContainer, ImageContainer, PropertySpan, Quantity, Value, Arrow, RemoveButton} from "./checkout-item.styles.jsx"
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import {addItemToCart, clearItemFromCart, removeItemFromCart} from "../../store/cart/cart.action.js"
const Checkout = ({item}) => {

    const {name, id, quantity, price, imageUrl} = item

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems)

    const addItemHandler= ()=>dispatch(addItemToCart(cartItems,item))
    const removeItemHandler= ()=>dispatch(removeItemFromCart(cartItems,item))
    const clearItemHandler = ()=>dispatch(clearItemFromCart(cartItems,item))
    return (            
            <CheckoutItemContainer key={id}>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
              <PropertySpan>{name}</PropertySpan>

              <Quantity className='quantity'>
              <Arrow onClick={removeItemHandler}> &#10094; </Arrow>
              <Value>{quantity}</Value>
              <Arrow onClick={addItemHandler}>  &#10095; </Arrow>
              </Quantity>

              <PropertySpan style={{marginLeft: "17%"}}>{price}</PropertySpan>
              <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
              </CheckoutItemContainer>
    );
}

export default Checkout;
