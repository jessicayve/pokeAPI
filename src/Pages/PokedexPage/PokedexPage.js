import React from 'react'
import { Header } from '../../Components/Header/Header'
import { useContext } from 'react'
import { ContainerPokedex, Pokedex, PokedexTitle } from './PokedexPageStyle'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import { PokemonCard } from '../../Components/PokemonCard/PokemonCard'




function PokedexPage() {

  const context = useContext(GlobalContext)
  const { pokedex, removeFromPokedex } = context;



  return (
    <>
      <Header />
      <ContainerPokedex>
        <PokedexTitle>My Pokémons</PokedexTitle>
        <Pokedex>
          {pokedex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                pokemonUrl={`${"https://pokeapi.co/api/v2/pokemon"}/${pokemon.id}`}
                removeFromPokedex={removeFromPokedex}
              />)
          })}
        </Pokedex>
      </ContainerPokedex>
    </>
  )
}

export default PokedexPage;
