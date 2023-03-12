import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/Cart-Dropdown/CartDropdown";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import "./navigation.styles.scss"

const Navigation = ()=>{
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)

    return( 
      <Fragment>
      <div className="navigation">
      <Link className="logo-container" to="/">
      <CrwnLogo className="Logo"/>
      </Link>
      <div className="nav-links-container">
         <Link className="nav-link" to="/shop" >SHOP</Link>
         {
          currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN-OUT</span>
          )
          :(<Link className="nav-link" to="/auth" >SIGN-IN</Link>)
         }
         <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>)
  }

  export default Navigation;
  