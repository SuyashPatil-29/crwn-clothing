import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useParams } from 'react-router-dom';
import ProductCart from '../../components/ProductCart/ProductCart';
import "./category.styles.scss"

const CategoryComponent = () => {
    const { category }= useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])


    useEffect(()=>{
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <div className='category-outer-container'>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className="category-container">
            {
                products && products.map((product)=>{
                    return <ProductCart key={product.id} product={product}/>
                })
            }
        </div>
        </div>
    );
}

export default CategoryComponent;
