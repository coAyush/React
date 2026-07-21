import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      {/* Spinner */}
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
        <div className="absolute inset-0 rounded-full border-4 border-t-red-500 border-r-pink-500 animate-spin"></div>
      </div>

      {/* Heading */}
      <h1 className="mt-10 text-4xl font-extrabold bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
        Loading Movies
      </h1>

      {/* Subtitle */}
      <p className="mt-3 text-gray-400 text-lg">
        Fetching the latest movies for you...
      </p>

      {/* Animated Dots */}
      <div className="flex gap-2 mt-8">
        <span className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></span>
        <span
          className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>

    </div>
  );
};

export default Loading;