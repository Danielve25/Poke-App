import axios from "axios";
import React, {useEffect, useState} from "react";

const PokemonPreview = ({pokemonURL}) => {
    const [pokemon, SetPokemon] = useState(null);
    const colorByType = {
        normal: "bg-[#A8A77A]",
        fire: "bg-[#EE8130]",
        water: "bg-[#6390F0]",
        electric: "bg-[#F7D02C]",
        grass: "bg-[#7AC74C]",
        ice: "bg-[#96D9D6]",
        fighting: "bg-[#C22E28]",
        poison: "bg-[#A33EA1]",
        ground: "bg-[#E2BF65]",
        flying: "bg-[#A98FF3]",
        psychic: "bg-[#F95587]",
        bug: "bg-[#A6B91A]",
        rock: "bg-[#B6A136]",
        ghost: "bg-[#735797]",
        dragon: "bg-[#6F35FC]",
        dark: "bg-[#705746]",
        steel: "bg-[#B7B7CE]",
        fairy: "bg-[#D685AD]",
    }
    useEffect(() => {
        axios
        .get(pokemonURL) // Cambiado de {pokemonURL} a pokemonURL
        .then(({data}) => SetPokemon(data))
        .catch((err) => console.log("error al obtener datos"));
    }, []);
    return (
        <article className="capitalize pb-4 font-semibold rounded-2xl text-center relative border-2 border-transparent bg-white shadow-lg shadow-slate-400/10 hover:border-2 hover:border-slate-200 cursor-pointer group grid gap-2">
            <header className="h-9">
                <img 
                src={pokemon?.sprites.front_default} 
                alt=""
                className="absolute left-1/2 -translate-x-1/2 -top-1 -translate-y-1/2 group-hover:scale-110 transform transition-transform pixelated"
                />
            </header>
            <span className="text-sm text-slate-400">N° {pokemon?.id}</span>
            <h4 className="text-lg">{pokemon?.name}</h4>
            <ul className="flex gap-2 justify-center">
                {pokemon?.types.map((type) => (
                    <li className={`p-1 rounded-md px-2 text-white 
                        ${colorByType[type.type.name]
                    }`} 
                    key={type.type.name}
                    >
                        {type.type.name}
                    </li>
            ))}
            </ul>
        </article>
    );
};

export default PokemonPreview;
