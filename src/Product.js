import React from "react";
import { Link } from "react-router-dom";

function Product({title,thumbnail,category,price,id}) {


    return(
        <div>
            <img src={thumbnail} className = "h-64 w-80 " />
            <div>{title}</div>
            <div>{category}</div>
            <div>{price}</div>
            <Link to={"/products/"  + id} className = 'text-green-900'>view detail </Link>
            


        </div>
    )
}
export default Product;