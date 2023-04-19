import React, { useState } from 'react'
import { CardPokemon, ImageContainer, PokemonName, PokemonNumber, PokemonType, TypesContainer, Buttons, DetailsButton, DeleteButton } from './PokemonCardStyle'
import pokebola from '../../assets/pokebola.png'
import { getTypes } from '../../utils/ReturnPokemonType'
import { getColors } from '../../utils/ReturnCardColors'
import { useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../../GlobalContext/GlobalContext'
import { CatchButton } from './PokemonCardStyle'
import { goToDetailsPage } from '../../routes/coordinator'



export const PokemonCard = (props) => {

    const [pokemonColor, setPokemonColor] = useState("")
    const { pokemonUrl } = props;
    const [pokemon, setPokemon] = useState({});
    const context = useContext(GlobalContext);
    const { addToPokedex, removeFromPokedex, setIsOpen, setIsOpenDel } = context;
    const navigate = useNavigate()
    const location = useLocation()



    useEffect(() => {
        fetchPokemon();
    }, []);

    const fetchPokemon = async () => {
        try {
            const response = await axios.get(pokemonUrl);
            setPokemon(response.data);
            setPokemonColor(getColors(response.data.types[0].type.name))

        } catch (error) {
            console.log("Error");
            console.log(error);
        }
    }
    const capitalizeFistLetter = (string) => {
        return string && string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (

        <>
         
            <CardPokemon style={{ backgroundColor: pokemonColor }}
            >
                <PokemonNumber>
                    <p>#{pokemon.id}</p>
                </PokemonNumber>
                <PokemonName>
                    <h2>{capitalizeFistLetter(pokemon.name)}</h2>
                </PokemonName>
                <TypesContainer>
                    {pokemon?.types?.map((type) => {
                        return <PokemonType key={type} src={getTypes(type.type.name)} alt="type" />
                    })}
                </TypesContainer>

                <Buttons>
                    <DetailsButton
                        onClick={() => goToDetailsPage(navigate, pokemon.id)}>Details
                    </DetailsButton>

                    {location.pathname === "/" ? (
                        <CatchButton onClick={() => addToPokedex(pokemon) }>
                            Catch!
                        </CatchButton>
                    ) : (
                        <DeleteButton onClick={() => removeFromPokedex(pokemon)}>
                            Delete
                        </DeleteButton>
                    )}
                </Buttons>

                <ImageContainer>
                    <img className='pokeImage'
                        src={pokemon.sprites?.other["official-artwork"].front_default} alt="pokemons" />
                    <img className='pokeball'
                        src={pokebola} alt="pokeball" />
                </ImageContainer>
            </CardPokemon>
        </>
    )
}