import Checkout from '../../components/Checkout/Checkout';
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from"./checkout.styles.jsx"
import { useSelector } from 'react-redux';
import {selectCartItems, selectCartTotal} from "../../store/cart/cart.selector"

const CheckoutRoute = () => {

    const cartItems= useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

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
