import Home from "./routes/home/home.component";
import { useDispatch } from "react-redux";
import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/Authentication/Authentication.component";
import Shop from "./routes/Shop/Shop.components";
import CheckoutRoute from "./routes/CheckoutsRoutes/CheckoutRoutes";
import {useEffect } from "react";
import { onAuthStateChangedListener} from "./utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "./utils/firebase/firebase.utils"
import { setCurrentUser } from "./store/user/user.action";


const App= ()=> {

const dispatch = useDispatch()


  useEffect(()=>{
    const unsubscribe = onAuthStateChangedListener((user)=>{
        if(user){
           createUserDocumentFromAuth(user)
        }
        dispatch(setCurrentUser(user));
    });
    return unsubscribe
} ,[dispatch]);

  return (
   <Routes>
   <Route path="/" element={<Navigation />}>
    <Route index element={<Home />} />
    <Route path="shop/*" element={<Shop />} />
    <Route path="auth" element={<Authentication />} />
    <Route path="checkout" element={<CheckoutRoute />} />
   </Route>
   </Routes>
  );
}

export default App;
