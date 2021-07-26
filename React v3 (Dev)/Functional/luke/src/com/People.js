import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'
const People = (props) => {
const [people,setPeople]= useState ('')
useEffect(()=>{
    axios.get("https://swapi.dev/api/people/"+props.id)
    .then((res)=>setPeople(res.data))
    .catch((err)=>console.log(err))

}),[props.id]



    return (
        <div>
        <h2>NAME: {people.name}</h2>
        <p>Height: {people.height}</p>
        <p>Mass: {people.mass}</p>
        <p>Hair Color: {people.hair_color}</p>
        <p>Skin color: {people.skin_color}</p>            


        </div>
    )
}

export default People
