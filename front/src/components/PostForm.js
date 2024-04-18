
import React, { useState } from 'react';
import Axios from 'axios';

export default function PostForm() {
    
    const[name, setName] = useState("");
    const[price, setPrice] = useState("");

    const collectData= async(e)=>{
        e.preventDefault();
        let result = await fetch('http://127.0.0.1:4000/api/v1/admin/product/new',{
            method:'post',
            body:JSON.stringify({name,price}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result= await result.json;
        localStorage.setItem("Product",JSON.stringify(result));
    }
  return (
    <div>
        <h1>Posting data to Database.</h1>
        <form onSubmit={collectData}>
            <input onChange={(e)=>setName(e.target.value)} id="name" value={name} placeholder="ProductName" type="text"></input>
            <input onChange={(e)=>setPrice(e.target.value)} id="price" value={price} placeholder="ProductPrice" type="number"></input>
        
            <button >Submit</button>
        </form>
    </div>
  );
}
