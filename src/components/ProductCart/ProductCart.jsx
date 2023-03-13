import React, { useContext } from 'react';
import Button from '../Button/Button-component';
import { CartContext } from '../../contexts/cart.context';
import "./ProductCart.styles.scss"

const ProductCart = ({product}) => {
    const { name, imageUrl, price} = product

    const addProductToCart = ()=>{
        
        return addItemToCart(product)}

    const { addItemToCart }= useContext(CartContext)
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add To Cart</Button>
        </div>
    );
}

export default ProductCart;

