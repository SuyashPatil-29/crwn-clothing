import React from 'react';
import ProductCart from '../ProductCart/ProductCart';
import {CategoryPreviewContainer , Preview , Title} from "./category-preview.styles.jsx"

const CategoryPreview = ({title, products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
            <Title style={{color: "darkblue"}} to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
               {
                products
                .filter((_, idx)=>idx < 4)
                .map((product)=><ProductCart key={product.id} product={product}/>)
               }
            </Preview>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;
