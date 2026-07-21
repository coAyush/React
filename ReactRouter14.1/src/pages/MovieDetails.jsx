import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router'

const MovieDetails = () => {
     const movie=useLoaderData();
     console.log(movie);
     
  return (
    <div className="min-h-screen bg-gray-950 text-white py-10 px-5">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">

        <div className="grid md:grid-cols-3 gap-8 p-8">

          {/* Poster */}
          <div className="flex justify-center">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="rounded-xl shadow-lg w-full max-w-xs hover:scale-105 transition duration-300"
            />
          </div>

          {/* Movie Info */}
          <div className="md:col-span-2 flex flex-col gap-4">

            <h1 className="text-4xl font-bold">
              {movie.Title}
            </h1>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-red-600 px-3 py-1 rounded-full">
                ⭐ {movie.imdbRating}/10
              </span>

              <span className="bg-blue-600 px-3 py-1 rounded-full">
                {movie.Year}
              </span>

              <span className="bg-green-600 px-3 py-1 rounded-full">
                {movie.Runtime}
              </span>

              <span className="bg-purple-600 px-3 py-1 rounded-full">
                {movie.Rated}
              </span>
            </div>

            <p className="text-gray-300 leading-7">
              {movie.Plot}
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-3">

              <div>
                <h3 className="font-semibold text-gray-400">
                  Genre
                </h3>
                <p>{movie.Genre}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-400">
                  Director
                </h3>
                <p>{movie.Director}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-400">
                  Writer
                </h3>
                <p>{movie.Writer}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-400">
                  Actors
                </h3>
                <p>{movie.Actors}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-400">
                  Language
                </h3>
                <p>{movie.Language}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-400">
                  Country
                </h3>
                <p>{movie.Country}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-400">
                  Awards
                </h3>
                <p>{movie.Awards}</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-400">
                  IMDb Votes
                </h3>
                <p>{movie.imdbVotes}</p>
              </div>

            </div>

            <div className="mt-5 flex gap-4">

              <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition">
                ▶ Watch Trailer
              </button>

              <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition">
                + Watchlist
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetails
