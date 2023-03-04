import React from "react";
import { useState } from "react";
import Tablerow from "./Tablerow";

function Table() {
  

  
  const [val,setVal] = useState(2);


  

  function handleChange(event) {

    let newNum = +event.target.value;
    setVal(newNum);


  }


  return(
    <>
    <div className="flex flex-col content-center items-center flex-wrap">
      <input onChange={handleChange} value = {val} className= 'border border-black p-2 w-80 ml-14 mr-14' />
|    <Tablerow number = {val} index = {1}/>
    <Tablerow number = {val} index = {2}/>
    <Tablerow number = {val} index = {3}/>
    <Tablerow number = {val} index = {4}/>
    <Tablerow number = {val} index = {5}/>
    <Tablerow number = {val} index = {6}/>
    </div>
    </>
  )
}

export default Table;