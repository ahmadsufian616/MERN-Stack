import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
const Update = (props) => {
    const {id}=props
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState();
    const [desc,setDesc]=useState("");
useEffect(()=>{
    axios.get("http://localhost:8000/api/get/"+id)
    .then(res =>{
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDesc(res.data.desc);


    })
},[])



        const  Updatehandler= (e) =>{
            e.preventDefault();
            axios.put("http://localhost:8000/api/edit/"+id,{
                title,
                price,
                desc
            })
                .then(res => console.log(res))


}


    return (
        <div>
<h1>Update Product</h1>
<form onSubmit={Updatehandler}>
    <input type= "text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
    <input type="integer" placeholder="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
    <input type="text" placeholder="desc" value={desc} onChange={(e)=> {setDesc(e.target.value)}}/>
     <input type="submit"/>


</form>

        </div>
    )
}

export default Update
