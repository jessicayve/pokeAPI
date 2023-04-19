import { React, useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { Button } from "@chakra-ui/react";
import { Container } from "./HeaderStyle";
import pokemonLogo from "../../assets/pokemonLogo.png"

export function Header(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const context = useContext(GlobalContext);

  const [pokemonAlreadyOnPokedex, setPokemonAlreadyOnPokedex] = useState(false);

  const { addPokemonToPokedex, pokedex, removeFromPokedex, pokemonDetails} = context;

  useEffect(() => {
    checkPokemonAlreadyOnPokedex()
  }, [])

  const checkPokemonAlreadyOnPokedex = (pokemonDetails) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.id === Number(params.id)
    );
    if (isAlreadyOnPokedex) {
      setPokemonAlreadyOnPokedex(true);
    }
  }


  const setPokemonToPokedex = () => {
    const copyPokemon = pokemonDetails
    copyPokemon.url = `https://pokeapi.co/api/v2/pokemon/${params.id}/`;
    console.log(copyPokemon)
    addPokemonToPokedex(copyPokemon);
    checkPokemonAlreadyOnPokedex(copyPokemon)
  }

  const removePokemon = () => {
    removeFromPokedex(params.id)
    setPokemonAlreadyOnPokedex(false)
  }

  function render() {
    if (location.pathname === "/") {
      return (
        <>
          <img
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            src={pokemonLogo}
            alt="Pokémon Logo"
          />
          <Button
            onClick={() => goToPokedexPage(navigate)}
            backgroundColor="#33A4F5"
            w="167px"
            h="45px"
            borderRadius={5}
            fontFamily={"Poppins"}
            border={"hidden"}
            cursor={"pointer"}
            color="#ffffff"
            left={"87%"}
            fontSize={"18"}
            
          >
            Pokédex
          </Button>
        </>
      );
    } else if (location.pathname === "/pokedex") {
      return (
        <>
          <Button
            left={"2%"}
            fontSize={"18"}
            as={"u"}
            fontWeight="bold"
            border={"hidden"}
            fontFamily={"Poppins"}
            backgroundColor="white"
            cursor={"pointer"}
            onClick={() => goToHomePage(navigate)}
          >
            {"< "} All Pokémons
          </Button>
          <img
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "100px"
            }}
            src={pokemonLogo}
            alt="Pokemon logo"
          />
        </>
      );
    } else if (location.pathname === `/detailspage/${params.id}`) {
      return (
        <>
          <Button
            fontSize={"18"}
            as={"u"}
            fontWeight="bold"
            border={"hidden"}
            fontFamily={"Poppins"}
            backgroundColor="white"
            cursor={"pointer"}
            onClick={() => goToHomePage(navigate)}
          >
            {"< "}All pokémon
          </Button>

          <img src={pokemonLogo} alt="Pokemon logo" />

          {
            pokemonAlreadyOnPokedex ? (

              <Button
              onClick={() => removePokemon()}
              backgroundColor="#FF6262"
              w="167px"
              h="45px"
              borderRadius={5}
              fontFamily={"Poppins"}
              border={"hidden"}
              cursor={"pointer"}
              color="#ffffff"
              fontWeight="bold"
            >
              Delete
            </Button>

            ) : (
              <Button
              cursor={"pointer"}
              fontStyle={"400"}
              fontSize={"16"}
              lineHeight={"24"}
              color={"#0F0F0F"}
              w="146px"
              h="38px"
              right={"15px"}
              border={"hidden"}
              borderRadius={8}
              colorScheme="white"
              fontFamily={"Poppins"}
              onClick={() => setPokemonToPokedex()}
            >
              Catch!
            </Button> 


            )
          }
        </>
      );
    }
  }

  return <Container>{render()}</Container>;
}

export default Header;