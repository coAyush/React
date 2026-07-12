import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import Cards from './Cards';

const PokemonCards = ({search,pokemons}) => {
    
    console.log(pokemons);
    if (!pokemons.length) {
        return <Loading />
    }
    const filteredArray= pokemons.filter((pokemon,index)=>pokemon.name.toLowerCase().includes(search.trim().toLowerCase()));
    return (
        <div className='w-full flex justify-center'>
            <div className='grid grid-cols-4 gap-6 px-4'>
                {
                
                    filteredArray.map((pokemon, index) => {
                        return <Cards key={pokemon.name} pokemon={pokemon} />
                    })
                }
            </div>
        </div>
    )
}

export default PokemonCards
