import React, { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import "./checkout-item.styles.scss"


const Checkout = ({item}) => {

    console.log(item);

    const {name, id, quantity, price, imageUrl} = item

    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)


    return (            
            <div key={id} className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
              <span className='name'>{name}</span>
              <span className='quantity'>
              <div className='arrow' onClick={()=>removeItemFromCart(item)}> &#10094; </div>
              <span className='value'>{quantity}</span>
              <div className='arrow' onClick={()=>addItemToCart(item)}>  &#10095; </div>
              </span>
              <span className='price'>{price}</span>
              <div className='remove-button' onClick={()=>clearItemFromCart(item)}>&#10005;</div>
              </div>
    );
}

export default Checkout;
