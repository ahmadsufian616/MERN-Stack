import React from 'react'
import { useState } from 'react'
import {navigate} from '@reach/router'
const Search = () => {
const [option,setOption]=useState("people")//(people,planet) the first input 
const [id,setID]=useState(1)//the id of the (people,planet) the second input
const searchHandler=(e)=>{//here we use navigate to redirect to the right path => https://swapi.dev/api/option/id
    e.preventDefault();
    navigate(`/${option}/${id}`)
    
}





    return (
        <form onSubmit={searchHandler}>
       <select onChange={(e)=>setOption(e.target.value)}>
            <option value="people">people</option>
            <option value="planets">Planets</option>
       </select>
       <input onChange={(e)=>setID(e.target.value)}/>
       <input type="submit" value="Search"></input>


        </form>
        
        )
}

export default Search
