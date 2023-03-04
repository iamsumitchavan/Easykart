import React from "react";
import {HiOutlineShoppingBag} from 'react-icons/hi'
import { Link } from "react-router-dom";


function Navbar({productCount}) {


    return  (
        <div className=" flex border border-black justify-between">
       <Link to= "/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy0X0LDXtvTjbGjZ_0Yxd58ReX2AlVaKkIba7NlJ6e&s"
        className="h-20 w-28 ml-16 mt-10" /> </Link>

        <div className="flex flex-col items-center">
           <Link to= "/cart"> <HiOutlineShoppingBag  className="h-14 w-16 text-red-500 mt-6 -mb-8 "/> </Link>
            <span>{productCount}</span>

        </div>
    </div>
    )
    
}

export default Navbar;