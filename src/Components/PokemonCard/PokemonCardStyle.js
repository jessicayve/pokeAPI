import styled from "styled-components";

export const CardPokemon = styled.div`
 width: 380px;
 height: 200px;
 border-radius: 12px;
 padding: 20px;
 font-family: 'Poppins', sans-serif;
` 
export const PokemonNumber = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
  color: #FFFFFF;
`

export const PokemonName = styled.div`
 font-family: 'Inter';
 font-style: normal;
 font-weight: 600;
 font-size: 30px;
 line-height: 39px;
 color: #FFFFFF;
`
export const PokemonType = styled.img`
 
`

export const TypesContainer = styled.div`
 display: flex;
 flex-direction: row;
 margin-top: 10px;
 gap: 2px;
`
export const ImageContainer = styled.div`
 display: flex;
 justify-content: center;
 position: relative;
 align-items: center;
 width: 180px;
 height: 180px;

.pokeImage{
 z-index: 1;
 max-width: 180px;
 margin-bottom: 440px;
 margin-left: 400px;
}

.pokeball{
  position: absolute;
  margin-bottom: 386px;
  margin-left: 364px;
}
`
export const Buttons = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: 20px;
 border: none;
`
export const DetailsButton = styled.div`
 font-weight: 500;
 font-size: 18px;
 text-decoration-line: underline;
 color: #FFFFFF;
 cursor: pointer;
 letter-spacing: 1px;
`

export const CatchButton = styled.button`
 font-style: normal;
 font-weight: 400;
 font-size: 18px;
 line-height: 16px;
 padding: 6px 30px;
 background: #FFFFFF;
 border-radius: 6px;
 cursor: pointer;
`

export const DeleteButton = styled.button`
 padding: 8px 32px;
 background: #FF6262;
 border-radius: 6px;
 cursor: pointer;
 color: #FFFFFF;
 font-size: 16px;
 `
