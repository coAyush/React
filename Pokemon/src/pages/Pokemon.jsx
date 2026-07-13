<<<<<<< HEAD
import React from 'react'
import Heading from '../components/Heading'
import Search from '../components/Search'
import PokemonCards from '../components/PokemonCards'
import { useState,useEffect } from 'react'
const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const[search,setSearch]=useState("");
    useEffect(() => {
        const pokemonData = async () => {
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
                const data = await response.json();
                console.log(data);
                setPokemons(data.results);
            } catch (error) {
                return <Error />;
            }
        }
        pokemonData();
    }, [])
  return (
    <>
    <div className='flex flex-col min-h-screen  gap-1.5 md:gap-2.5 bg-gradient-to-r from-blue-200 to-gray-300 items-center'>
        <Heading />
        <Search search={search} setSearch={setSearch}/>
        <PokemonCards search={search} pokemons={pokemons} />
=======
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
>>>>>>> fad49e8853f402846b24afe05228ae6f5adb7ce2
    </div>
    </>
  )
}

<<<<<<< HEAD
export default Pokemon
=======
export default Pokemon
>>>>>>> fad49e8853f402846b24afe05228ae6f5adb7ce2
