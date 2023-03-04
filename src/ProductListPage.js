import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductList from "./Productlist";
import { getPrductList } from "./Api";
import { data } from "./Dummydata";
import NoMatching from "./Nomatching";
import { dataFromApi } from "./DataFromApi";
import Loading from "./Loading";




function ProductListPage() {
    const [productlist,setProductList] = useState([]);
    const [loading,setLoading] = useState(true);
    
    

    
    const [query,setQuery] = useState ("");
    const [sort,setSort] = useState("default");



    useEffect (function() {

        const xyz = getPrductList();
        
        xyz.then(function(products) {
            
           let d = products;
            setProductList(d);
            //dataFromApi.push(...d);
            setLoading(false);

        })
        
    
        },[])
    


    
    
    let nData = productlist.filter(function(item) {
        
        const lowerCaseTitle = item.title.toLowerCase();
        const lowerCaseQuery = query.toLowerCase();
        
        return(
            lowerCaseTitle.indexOf(lowerCaseQuery) != -1
            )
        });
        
if(sort == 'price') {

    nData.sort(function(x,y) {

        return x.price - y.price;
    })
}
else if(sort == 'title')  {

    nData.sort(function(x,y) {

        return x.title > y.title ? 1: -1;
    })
}

function handleQueryChange(event) {

    setQuery(event.target.value);
}

function handleSortChange(event) {

    setSort(event.target.value);
}

if(loading) {

    return <Loading/>
}

return(
    <div>
       
        <div className="flex justify-end m-7">
            <span className="p-2 text-lg">search</span>
        <input placeholder="searchhere" className="border border-black " value={query} onChange = {handleQueryChange} />
        <select value = {sort} onChange = { handleSortChange} className = 'border border-black'>
            <option value ="default">sort by default</option>
            <option value ="price">sort by price</option>
            <option value ="title">sort by name</option>
        </select>
        
        </div>
        {nData.length > 0 && <ProductList products = {nData}/>}
        {nData.length == 0 && <NoMatching>No Matching result found</NoMatching>}

    </div>
)
}


export default ProductListPage;

