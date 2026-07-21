import React from 'react'
import { NavLink } from 'react-router';
const Card = ({ movie }) => {
  const { Poster, Title, Year, Type, imdbID } = movie;
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <img
        src={Poster}
        alt={Title}
        className="w-full h-80 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl font-bold mb-2">
          {Title}
        </h2>

        <div className="flex justify-between text-gray-600 text-sm">
          <span>{Year}</span>
          <span className="capitalize">{Type}</span>
        </div>
        <NavLink to={`/movie/${imdbID}`}>
          <button className="mt-5 w-full bg-linear-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:scale-105 transition">
            Watch Now
          </button>
        </NavLink>
      </div>

    </div>
  );
};

export default Card;