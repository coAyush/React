import React from "react";

const Cards = ({note,onDelete}) => {
  return (
    <div className="p-8 lg:p-12">
      
      <p className="text-amber-400 text-3xl tracking-wider font-extrabold mt-8">
        RECENT NOTES
      </p>

      {note.length === 0 && (
        <p className="text-gray-400 mt-4">No notes yet</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 mt-6">
        {note.map((n) => (
          <div
            key={n.id}
            className="bg-gradient-to-b from-yellow-400 to-yellow-100 h-[300px] w-[250px] rounded-[25px] p-6 flex flex-col gap-3"
          >
            <h3 className="font-bold text-3xl text-pink-400">
              {n.title}
            </h3>

            <p className="text-xl text-black tracking-tight underline">
              {n.desc}
            </p>
            <button className="w-full h-[25px] rounded-[12.5px] font-bold bg-red-700 mt-25.5 active:bg-red-400" onClick={()=>{onDelete(n.id)}}>Delete</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Cards;