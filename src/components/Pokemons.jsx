import  axios  from 'axios'
import React from 'react'
import SearchBar from './SearchBar'
import { useEffect, useState } from 'react'
import PokemonList from './PokemonList'
const Pokemons = () => {
  const [Allpokemons, setAllPokemons] = useState([])

  useEffect(() => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(({data}) => setAllPokemons(data.results))
      .then(() => console.log("se obtuvieron los pokemon"))
      .catch((err) => console.log("error al obtener datos"))
    }, [])
    return (
        <section className="p-4 py-5 w-max">
          <SearchBar/>
          <PokemonList pokemons={Allpokemons} />
        </section>
  )
}

export default Pokemons