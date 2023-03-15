import React, { useContext } from 'react';
import Checkout from '../../components/Checkout/Checkout';
import { CartContext } from '../../contexts/cart.context';
import "./checkout.styles.scss"

const CheckoutRoute = () => {

    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <div className="checkout-container" >
            <div  className="checkout-header" >
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
            <span>Description</span>
            </div>
            <div className='header-block'>
            <span>Quantity</span>
            </div>
            <div className='header-block'>
            <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
                </div>
            </div>

            {cartItems.map((item)=>{
              return (
                <Checkout key={item.id} item={item}/>
              )
})}
              <span className='total'>TOTAL : ${cartTotal}</span>


        </div>)
        

    }


export default CheckoutRoute;
