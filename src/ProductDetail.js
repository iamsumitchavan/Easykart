import React from "react";
import { useParams } from "react-router-dom";
import { data } from "./Dummydata";
import {Link} from 'react-router-dom';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { dataFromApi } from "./DataFromApi";
import { useEffect } from "react";
import { getProductData } from "./Api";
import { useState } from "react";
import Loading from "./Loading";
import NotFound from "./NotFound";


function ProductDetail({onAddToCart}) {

   const id = +(useParams().id);

   const [product,setProduct] = useState();
   const [loading,setLoading] = useState(true);
   const [count,setCount] = useState(1);
   
   const p = getProductData(id);
   useEffect(function() {


    p.then(function(product) {
        console.log(product);

        setProduct(product);
        setLoading(false);


    })
   },[id]);


   function handleChangeCount(event) {

    setCount(+event.target.value);
   }


  

   
   function handleButtonClick() {

    onAddToCart(id,count);
   }







   if(loading) {
    return <Loading/>
   }



   if(!product) {

    return <NotFound/>
   }

  

   
    

    return (
    <>
        <div className="ml-28">
            <Link to = '/' classname = 'text-red-700 text-lg flex items-center'>
                
                <HiOutlineArrowLeft className="bg-white h-7 w-10 my-9"/> 
                </Link>
            <img src={product.thumbnail}   />
            <h1>{product.title}</h1>
            <div>{product.category}</div>
            
            <input 
            type="number" className="border border-black w-12" value={count} 
            onChange = {handleChangeCount}/>
           
            <button onClick={handleButtonClick} className="bg-red-700 border border-black rounded-lg text-white  active:bg-violet-900  ">Add to cart</button>
           
            <p>{product.discription}</p>
            
            </div> 

            <div className="flex justify-between">

            <Link to = {'/products/' + (id - 1)} classname = 'text-red-700 text-lg mt-2 flex items-center '>
                <HiOutlineArrowLeft className="bg-white h-7 w-10 "/> Previous
                </Link>
            <Link to = {'/products/' + (id + 1)} classname = 'text-red-700 text-lg mt-2 flex items-center '>
                <HiOutlineArrowRight className="bg-white h-7 w-10 "/> Previous
                </Link>

                
           

          </div>

      
        </>
        );
    
}

export default ProductDetail;