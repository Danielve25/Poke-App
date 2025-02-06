import axios from "axios";
import React, {useEffect, useState} from "react";

const PokemonPreview = ({pokemonURL}) => {
    const [pokemon, SetPokemon] = useState(null);
    useEffect(() => {
        axios
        .get(pokemonURL) // Cambiado de {pokemonURL} a pokemonURL
        .then(({data}) => SetPokemon(data))
        .catch((err) => console.log("error al obtener datos"));
    }, []); // Añadido pokemonURL como dependencia
    return (
        <article className="capitalize pb-2 font-semibold rounded-2xl text-center relative bg-white">
            <header className="h-9">
                <img 
                src={pokemon?.sprites.front_default} 
                alt=""
                className="absolute left-1/2 -translate-x-1/2 -top-1 -translate-y-1/2"
                />
            </header>
            <span className="text-sm text-slate-400">N° {pokemon?.id}</span>
            <h4 className="text-lg">{pokemon?.name}</h4>
            <ul className="flex gap-2 justify-center">
                <li>{pokemon?.types.map(type => type.type.name).join(', ')}</li>
            </ul>
        </article>
    );
};

export default PokemonPreview;
