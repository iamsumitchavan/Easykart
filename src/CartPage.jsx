import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getProductData } from "./Api";


function CartPage({cart,updateCart}) {

    const [products,setProducts] = useState([]);
    const [localCart,setLocalCart] = useState(cart);

    const ProductIds = Object.keys(cart);
  console.log(ProductIds);

  useEffect(function() {

    setLocalCart(cart);
  },[cart]);

  useEffect(function() {

    const myProductPromis = ProductIds.map(function(id) {
      return getProductData(id);
    });

    Promise.all(myProductPromis).then(function(product) {

      setProducts(product);
    })
  },[cart]);



  function hadleRemove(event) {

    const productId = event.currentTarget.getAttribute('productId');
    console.log("product to be removed ",productId);
    const newCart = {...cart};
    console.log("before cart",cart);
    delete newCart[productId];
    updateCart(newCart);

   
  }

  function handleChange(event) {

    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productId");
    console.log("value is",newValue,productId);

    const newLocalCart = {...localCart,[productId]:newValue};

    setLocalCart(newLocalCart);
  }

  function myUpdateCart() {
    updateCart(localCart);
  }

    return(
        <div>

         
          {products.map(function(p) {

            return(
             <div>
              <button onClick={hadleRemove} productid = {p.id}>remove</button>
              <div key={p.id}>
                {p.title}
                </div>
                <input productid = {p.id} type = 'number' value={localCart[p.id]}
                onChange = {handleChange}/>
                <div>
                  <button onClick={myUpdateCart} className = 'bg-blue-600 text-white p-2 w-64'>update</button>
                  </div>
              </div>

              
            )
          })}

        </div>
    )
}

export default CartPage;