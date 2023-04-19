import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react"
import { HomePage } from "../Pages/HomePage/HomePage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailsPage/PokemonDetailsPage";



const Router = () => {
    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/pokedex" element={<PokedexPage/>}/>
      <Route path="/detailspage/:id" element={<PokemonDetailPage/>}/>
      </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router