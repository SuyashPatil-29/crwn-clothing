import { createContext , useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js"
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products: [],
})


export const ProductsProvider = ({children})=>{

    const [products] = useState([])

    useEffect(()=>{
        const getCategoriesMap= async ()=>{
        const categoryMap =await getCategoriesAndDocuments()
        console.log(categoryMap);
        };

        getCategoriesMap();
    },[])
    const value = {products}
 
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}