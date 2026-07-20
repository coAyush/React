import React, { useState } from 'react'
import { Heading } from '../components/Heading'
import Search from '../components/Search'
import CardList from '../components/CardList';

const Pokemon = () => {
    const[pokemonList,setPokemonList]=useState([]);
    return (
    <>
    <div className='bg-gradient-to-r min-h-screen from-white to-gray-200 flex flex-col items-center gap-1.5 P-5'>
        <Heading />
        <Search />
        <CardList pokemonList = {pokemonList} setPokemonList={setPokemonList}/>
    </div>
    </>
  )
}

export default Pokemon
