import React from "react";
import Item from "./Item";
import './Item.css';


function Itemlist({Products}) {


    return(
        <>

        <div id="demo">
            {Products.map(function(item){

                return(
                    <>
                    <Item 
                    Title={item.Title}
                    category = {item.category}
                    imgUrl = {item.imgUrl}
                    price = {item.price}/>
                    </>
                )
            })}
        </div>


        </>
    )
}
export default Itemlist;