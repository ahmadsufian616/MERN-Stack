import React from 'react'
import { useState, useEffect  } from 'react';
import axios from 'axios';


 ////////////////////////////Use fetch\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const Display = () => {
    const [pokemon,setPokemon]=useState([]);    
    const displayPokemon= () =>{
   
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(res => setPokemon(res.results))
    }

    return (
        <>
        
            <button onClick={displayPokemon}>Pokemons</button>
            <ul>
                {pokemon.length > 0 && pokemon.map((poki, index)=>{
                    return (<li key={index}>{poki.name}</li>)
                })}
            </ul>
            
        </>
    )
}

export default Display

////////////////////////////////////Use axios\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const Display = () => {
//     const [pokemon,setPokemon]=useState([]);    
//     const displayPokemon= () =>{
   
//         axios.get('https://pokeapi.co/api/v2/pokemon')
//         .then(res =>{ setPokemon(res.data.results)
//         console.log(res.data.results[0].name)
        
//         })
//     }

//     return (
//         <>
        
//             <button onClick={displayPokemon}>Pokemons</button>
//             <ul>
//                 {pokemon.length > 0 && pokemon.map((poki, index)=>{
//                     return (<li key={index}>{poki.name}</li>)
//                 })}
//             </ul>
            
//         </>
//     )
// }

// export default Display
