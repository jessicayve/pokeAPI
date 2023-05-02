import React from "react"
import Router from "./routes/Router"
import { GlobalStyle } from "./GlobalStyle"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { GlobalContext } from "./GlobalContext/GlobalContext"
import { ChakraProvider } from "@chakra-ui/react"



function App() {
  const [pokedex, setPokedex] = useState([])
  const [pokelist, setPokelist] = useState([]);
  const [pokemon, setPokemon] = useState([])
  const [pokemonDetails, setPokemonDetails] = useState({});


  useEffect(() => {
    getPokemons()
  }, [])

  const getPokemons = async () => {
    try {

      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=30&offset=0%22")

      setPokelist(response.data.results)

    } catch (error) {
      console.log(error)
    }
  }

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  }

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.id !== Number(pokemonToRemove.id)
    )
    setPokedex(newPokedex);
  }
  const context = {
    pokemon,
    setPokemon,
    pokelist,
    setPokelist,
    pokemonDetails,
    setPokemonDetails,
    pokedex,
    setPokedex,
    addToPokedex,
    removeFromPokedex

  }

  return (
    <>
      <GlobalContext.Provider value={context}>
        
        <ChakraProvider>
          <GlobalStyle />
          <Router />
        </ChakraProvider>
      </GlobalContext.Provider>
    </>
  )
}

export default App;
