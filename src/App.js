import Home from "./routes/home/home.component";
import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.components";
import Authentication from "./routes/Authentication/Authentication.component";
import Shop from "./routes/Shop/Shop.components";
import CheckoutRoute from "./routes/CheckoutsRoutes/CheckoutRoutes";


const App= ()=> {
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
