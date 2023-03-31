import { Fragment,useContext } from "react";
import { Outlet} from "react-router-dom";
import { useSelector } from "react-redux";
import {ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/Cart-Dropdown/CartDropdown";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLinks} from "./navigation.styles.jsx"
import { selectCurrentUser } from "../../store/user/user.selector";
const Navigation = ()=>{

  const currentUser = useSelector(selectCurrentUser)
  const { isCartOpen } = useContext(CartContext)

    return( 
      <Fragment>
      <NavigationContainer>
      <LogoContainer to="/">
      <CrwnLogo className="Logo"/>
      </LogoContainer>
      <NavLinksContainer>
         <NavLinks to="/shop" >SHOP </NavLinks>
         {
          currentUser ? (
            <NavLinks as="span" onClick={signOutUser}>SIGN-OUT</NavLinks>
          )
          :(<NavLinks to="/auth" >SIGN-IN </NavLinks>)
         }
         <CartIcon />
      </NavLinksContainer>
      {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>)
  }

  export default Navigation;
  