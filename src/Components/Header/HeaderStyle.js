import styled from "styled-components"



export const Container = styled.div`
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 158px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  img {
    width: 307px;
    height: 113px;
  }
`;

export const PokeLogo = styled.img`
width: 300px;
height: 110;
`

export const PokedexButton = styled.button`
background-color: #33A4F5;
display: flex;
align-items: center;
justify-content: center;
border: none;
border-radius: 5%;
width: 220px;
height: 56px;
color: white;
font-size: 26px;
margin-top: 100px;
cursor: pointer;
`

export const Button = styled.button`
`

export const GotoHomePageButton = styled.h1`
cursor: pointer;
text-decoration-line: underline;
font-weight: 700;
font-size: 24px;
`

