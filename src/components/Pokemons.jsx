import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
//import SearchBarIcon from "../assets/SearchIcon.svg";
//import { IconSearch } from "@tabler/icons-react";
import IconSearch from "./icons/IconSearch";
const INITIAL_LIMIT = 40;

const Pokemons = () => {
  const [Allpokemons, setAllPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [limit, setLimit] = useState(INITIAL_LIMIT);
  
  const pokemonsByName = Allpokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );
  const HandleChangePokemonName = (e) =>{
    setPokemonName(e.target.value.toLowerCase());
  }
  //? forma no controlada
  //const handleSbumit = (e) => {
  //  e.preventDefault();
  //  setPokemonName(e.target.PokemonName.value.toLowerCase());
  //};
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1024")
      .then(({ data }) => setAllPokemons(data.results))
      .catch((err) => console.log("error al obtener datos"));
  }, []);
  return (
    <section className="p-4 py-5 ">
      <form onChange={HandleChangePokemonName /*Forma Antigua: (e) => setPokemonName(e.target.value.toLowerCase())*/}>
        <div className="bg-white p-4 flex rounded-2xl text-lg">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search Pokemon"
            className="outline-none flex-1"
            name="PokemonName"
          />
          <button className="IconSearchButton cursor-pointer bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/50 hover:bg-red-400 transition-colors">
            <IconSearch />
          </button>
        </div>
      </form>
      <PokemonList pokemons={pokemonsByName.slice(0, limit)} />
    </section>
  );
};

export default Pokemons;
