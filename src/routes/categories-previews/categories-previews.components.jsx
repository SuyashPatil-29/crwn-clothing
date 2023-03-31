import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import CategoryPreview from '../../components/category-preview/CategoryPreview.component';
import "./categories-previews.styles.scss"


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <div className='category-preview-outer-container'>
        {
            Object.keys(categoriesMap).map(title=>{
                const products = categoriesMap[title]
                return(
                <CategoryPreview key={title} title={title} products={products}/>
            )})
        }
        </div>
    );
}

export default CategoriesPreview;
