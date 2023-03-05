import React from "react"
import categories from "../category-item/Category-arrays/categories"
import CategoryItem from "../category-item/CategoryItem.component"
import "./Directory.styles.scss"

const Directory = ()=>{
    return(<div className='directory-container'>
    {categories.map((category)=>{
      return(<CategoryItem key = {category.id} category={category}/>)
    })}
    </div>
    )
}

export default Directory