import {Routes, Route} from "react-router-dom"
import { useEffect } from "react";
import CategoriesPreview from "../categories-previews/categories-previews.components";
import CategoryComponent from "../category/category.component";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import "./shop.styles.scss"


const Shop = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        const getCategoriesMap= async ()=>{
        const categoriesArray =await getCategoriesAndDocuments()
        console.log(categoriesArray);
        dispatch(setCategories(categoriesArray))
        };

        getCategoriesMap();
    },[dispatch])


    return(
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<CategoryComponent />} />

        </Routes>
    )
}

export default Shop;
