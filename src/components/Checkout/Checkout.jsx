import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import {CheckoutItemContainer, ImageContainer, PropertySpan, Quantity, Value, Arrow, RemoveButton} from "./checkout-item.styles.jsx"


const Checkout = ({item}) => {

    console.log(item);

    const {name, id, quantity, price, imageUrl} = item

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)


    const addItemHandler= ()=>addItemToCart(item)
    const removeItemHandler= ()=>removeItemFromCart(item)
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
              <RemoveButton onClick={()=>clearItemFromCart(item)}>&#10005;</RemoveButton>
              </CheckoutItemContainer>
    );
}

export default Checkout;
