import  axios  from 'axios'
import React from 'react'
import SearchBar from './SearchBar'
import { useEffect, useState } from 'react'
import PokemonList from './PokemonList'
import { data } from 'react-router'
const Pokemons = () => {
  const [Allpokemons, setAllPokemons] = useState([])

  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=1024')
      .then(({data}) => setAllPokemons(data.results), console.log(data.results))
      .catch((err) => console.log("error al obtener datos"))
    }, [])
    return (
        <section className="p-4 py-5 ">
          <SearchBar/>
          <PokemonList pokemons={Allpokemons} />
        </section>
  )
}

export default Pokemons