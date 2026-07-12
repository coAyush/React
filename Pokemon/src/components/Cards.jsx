import React, { useEffect, useState } from 'react'

const Cards = ({ pokemon }) => {
    const [poke, setPoke] = useState({});
    useEffect(() => {
        const item = async () => {
            try {
                const data = await fetch(pokemon.url);
                const info = await data.json();
                console.log(info);
                setPoke(info);
            } catch (error) {
                return <Error />;
            }
        }
        item();
    }, [])
    console.log(poke);
    const attack = poke.stats?.find(
        stat => stat.stat.name === "attack"
    )?.base_stat;

    const speed = poke.stats?.find(
        stat => stat.stat.name === "speed"
    )?.base_stat;

    const abilities=poke.abilities?.map((item)=>item.ability.name);
    console.log(abilities)
    return (
        <div className='min-h-[180px] w-[200px] md:h-[350px] md:w-[370px] rounded-xl md:rounded-2xl bg-white border-4 border-amber-50 hover:scale-105 hover:border-amber-300 transition-all duration-150 flex flex-col md:gap-2 gap-1 items-center cursor-pointer p-5 shadow-xl'>
            <img src={poke.sprites?.other?.["official-artwork"]?.front_default} className='h-[95px] w-[140px] rounded-xl hover:scale-120 transition-all duration-150' />
            <p className='text-lg md:text-2xl font-bold text-black'>{(pokemon.name).toString().charAt(0).toUpperCase() + (pokemon.name).toString().substring(1, (pokemon.name).toString().length)}</p>
            <div className='bg-green-400 text-2xl text-white font-bold px-4 py-1  tracking-tight rounded-full'>
                {poke.types?.map(item => item.type.name.charAt(0).toUpperCase()+item.type.name.slice(1)).join(" | ")}
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 md:gap-2.5 gap-1.5 mt-4'>
                <div className='flex gap-1 '>
                    <label className='text-black text-lg font-bold tracking-tight whitespace-nowrap'>Height :</label>
                    <p>{poke.height}</p>
                </div>
                <div className='flex gap-1 '>
                    <label className='text-black text-lg font-bold tracking-tight whitespace-nowrap'>Weight :</label>
                    <p>{poke.weight}</p>
                </div>
                <div className='flex gap-1 '>
                    <label className='text-black text-lg font-bold tracking-tight whitespace-nowrap'>Attack :</label>
                    <p>{attack}</p>
                </div>
                <div className='flex gap-1 '>
                    <label className='text-black text-lg font-bold tracking-tight whitespace-nowrap'>Speed :</label>
                    <p>{speed}</p>
                </div>
                <div className='flex flex-col gap-0.5 '>
                    <label className='text-black text-lg font-bold tracking-tight whitespace-nowrap'>Abilities :</label>
                    <p>{poke.abilities?.[0]?.ability?.name}</p>
                </div>
                <div className='flex gap-1 whitespace-nowrap '>
                    <label className='text-black text-lg font-bold tracking-tight'>Experience :</label>
                    <p>{poke.base_experience}</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
