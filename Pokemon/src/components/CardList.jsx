import React, { useEffect } from 'react'

const CardList = ({pokemonList},{setPokemonList}) => {
   useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    .then()
    .catch();
   },[])
  return (
    <>

    </>
  )
}

export default CardList