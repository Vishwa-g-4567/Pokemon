import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import PokemonList from "./PokemonList";
import LoadingSpinner from "./LoadingSpinner";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const data = await Promise.all(
          response.data.results.map(async (pokemon) => {
            const pokemonData = await axios.get(pokemon.url);
            return pokemonData.data;
          })
        );
        setPokemons(data);
      } catch (error) {
        setError("Failed to fetch pokemon data.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, []);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  if (isLoading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  return (
    <div className="min-h-screen bg-gray-100">
      <Header search={search} handleSearch={handleSearch} />
      <div className="container mx-auto p-4">
        <PokemonList pokemons={filteredPokemons} />
      </div>
    </div>
  );
};

export default Pokemons;
