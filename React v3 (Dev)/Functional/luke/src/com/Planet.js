import React, { useEffect } from 'react'
import { useState,UseEffect } from 'react'
import axios from 'axios'

const Planet = (props) => {
    const [planet,setPlanet]=useState("")
    useEffect(()=>{
        axios.get("https://swapi.dev/api/planets/"+props.id)
        .then((res)=>setPlanet(res.data))
        .then((err)=>console.log(err))

    })
    return (
        <div>
            <h2>Name: {planet.name}</h2>
            <ul>
            <li><p>Rotation Period: {planet.rotation_period}</p></li>
            <li><p>Orbital Period: {planet.orbital_period}</p></li>
            <li><p>Diameter: {planet.diameter}</p></li>
            <li><p>Climate: {planet.climate}</p></li>
            <li><p>Gravity {planet.gravity}</p></li>
            <li><p>Terrain {planet.terrain}</p></li>
            <li><p>Surface Water: {planet.surface_water}</p></li>
            <li><p>Population: {planet.population}</p></li>
            </ul>
        </div>
    )
}

export default Planet
