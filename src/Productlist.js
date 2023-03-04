import React from "react";
import Product from "./Product";




function ProductList({products}) {


    return(
    
           
        <div className="md:grid grid-cols-3  gap-2 space-y-2  
         bg-slate-200 m-40 p-20"> 
            {products.map(function(item) {

                return(
                    <div>
                        
                   <Product  key={item.title} {...item}/>
                    </div>

                 
                    

                )
            })}

        </div>
    )
}
export default ProductList;