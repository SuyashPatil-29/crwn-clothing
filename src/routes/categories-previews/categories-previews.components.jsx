import React, {useContext} from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/CategoryPreview.component';
import "./categories-previews.styles.scss"


const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
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
