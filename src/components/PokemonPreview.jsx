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
        <article>
            <header>
                <img src={pokemon?.sprites.front_default} alt="" />
            </header>
            <span>N° {pokemon?.id}</span>
            <h4>{pokemon?.name}</h4>
            <ul>
                <li>Poison</li>
            </ul>
        </article>
    );
};

export default PokemonPreview;
