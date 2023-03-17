import React from "react"
import categories from "../category-item/Category-arrays/categories"
import DirectoryItem from "../category-item/Directory-Item.component"
import "./Directory.styles.scss"

const Directory = ()=>{
    return(<div className='directory-container'>
    {categories.map((category)=>{
      return(<DirectoryItem key = {category.id} category={category}/>)
    })}
    </div>
    )
}

export default Directory