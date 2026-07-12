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
    </div>
    </>
  )
}

export default Pokemon
