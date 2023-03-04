import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import ProductList from "./Productlist";
import ProductListPage from "./ProductListPage";
import CartPage from "./CartPage";



function App() {

    const saveDataString = localStorage.getItem("my_cart") || "{}";

    const saveData = JSON.parse(saveDataString);

    const [cart,setCart] = useState(saveData);

   const path = window.location.pathname;

   function handleAddToCart(productId,count) {

     const oldCount = cart[productId] || 0;

   const newCart = {...cart,[productId] : oldCount + count}
   updateCart(newCart);
    
   
   
 }

   
 
 function updateCart(newCart,updateCartr) {

    setCart(newCart);
    const cartString = JSON.stringify(newCart);
   localStorage.setItem('my-cart',cartString);
   }

   
   
   const totalCount = Object.keys(cart).reduce(function(previous,current) {
    return previous + cart[current];
   }, 0);

   return(
    <div className="h-screen">

        <Navbar productCount = {totalCount}/>
        
        <Routes>
            <Route index element = {<ProductListPage/>}></Route>
            <Route path = "/cart" element = {<CartPage cart = {cart}/>}/>
            <Route path = "/products/:id" element = {<ProductDetail onAddToCart= {handleAddToCart}/>}></Route>
            <Route path="*" element = {<NotFound/>} />
        </Routes>
    </div>
   )
}


export default App;