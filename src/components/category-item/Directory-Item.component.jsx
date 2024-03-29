import React from "react";
import {DirectoryItemContainer, BackgroundImage, Body} from "./Directory-item.styles.jsx"


const DirectoryItem = ({category})=>{
    const {imageUrl, title} = category
    return (
        <DirectoryItemContainer>
           <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}}/>
               <Body>
                  <h2>{title}</h2>
                  <p>Shop Now</p>
               </Body>  
               </DirectoryItemContainer>
      )
}

export default DirectoryItem 