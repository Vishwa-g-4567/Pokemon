import React from "react";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-blue-600">{pokemon.name}</h2>
      </div>
    </div>
  );
};

export default PokemonCard;
