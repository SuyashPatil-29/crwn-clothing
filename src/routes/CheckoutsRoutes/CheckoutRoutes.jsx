import React, { useContext } from 'react';
import Checkout from '../../components/Checkout/Checkout';
import { CartContext } from '../../contexts/cart.context';
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from"./checkout.styles.jsx"

const CheckoutRoute = () => {

    const {cartItems, cartTotal} = useContext(CartContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
            <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            {cartItems.map((item)=>{
              return (
                <Checkout key={item.id} item={item}/>
              )
})}
              <Total>TOTAL : ${cartTotal}</Total>


        </CheckoutContainer>)
        

    }


export default CheckoutRoute;
