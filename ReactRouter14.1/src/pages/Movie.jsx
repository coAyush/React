import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../component/Card';

const Movie = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div className="text-5xl font-extrabold tracking-wide bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    Enjoy the Movies & Shows
                </div>          
                <div className='grid grid-cols-4 gap-1.5 '>
                    {
                        data.Search.map((movie)=>{
                            return <Card key={movie.imdbID} movie={movie}></Card>
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default Movie
