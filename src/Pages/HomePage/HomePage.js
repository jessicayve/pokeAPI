import {Header} from '../../Components/Header/Header'
import { ContainerCard, PokemonContainer } from './HomePageStyle'
import React, { useContext } from 'react'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'
import { GlobalContext } from '../../GlobalContext/GlobalContext'





export const HomePage = () => {

  const context = useContext(GlobalContext)
  const { pokelist, addPokedex, pokedex } = context
 

  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <>
      <Header />
      <ContainerCard>
        <h1>All Pokémons</h1>
        <PokemonContainer>

          {filteredPokelist().map((pokemon) => {
            return <PokemonCard  addPokedex={addPokedex} key={pokemon.url} pokemonUrl={pokemon.url} />

          })}

        </PokemonContainer>
      </ContainerCard>
    </>

  )
}