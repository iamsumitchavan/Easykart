import React from "react";

function Item({Title,imgUrl,category,price}) {


    return(

        <div>
            <img src={imgUrl} id = 'img'/>
            <div>{Title}</div>
            <div>{category}</div>
            <div>{price}</div>

        </div>
    )
}
export default Item;